import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({navigation}) => {

    const [questions,setquestions]=useState();
    const [ques,setques]=useState(0);
    const [options,setoption]=useState([]);

    const [score,setScore]=useState(0);
    const [isLoading,setisloading]=useState(false);

    const getQuiz=async()=>{
        setisloading(true);
        const url='https://opentdb.com/api.php?amount=10&category=9&type=multiple&encode=url3986';
        const resp=await fetch(url);

        const data=await resp.json();
        setquestions(data.results);

        // console.log(data.results[0].incorrect_answers);
      
        setoption(generateOptionsAndShuffle(data.results[0]));
        setisloading(false);

    }
    useEffect(()=>{
        getQuiz();
    },[]);

const handlenextpress=()=>{
    setques(ques+1);
    setoption(generateOptionsAndShuffle(questions[ques+1]));
}

const generateOptionsAndShuffle=(_question)=>{
  // console.log(_question);
  const options=[..._question.incorrect_answers];
  options.push(_question.correct_answer);
  shuffleArray(options);
  return options;
}

const handleselectedoption=(_option)=>{
  if(_option===questions[ques].correct_answer){
        setScore(score+10);
  }
    if(ques!==9){
      setques(ques+1);
    setoption(generateOptionsAndShuffle(questions[ques+1]));
    }
  
}
const handleshowresult=()=>{
  navigation.navigate("Result",{
    score:score
  });
}
  return (
    <View style={styles.container}>
      {isLoading?<View  style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
        <Text>Loading...</Text>
      </View>:questions&&(
        <View style={styles.parent}>
        <View style={styles.top}>
        <Text style={styles.questext}>Q.{ques+1}  {decodeURIComponent(questions[ques].question)}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionbtn} onPress={()=>handleselectedoption(options[0])}>
          <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionbtn} onPress={()=>handleselectedoption(options[1])}>
          <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionbtn} onPress={()=>handleselectedoption(options[2])}>
          <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionbtn} onPress={()=>handleselectedoption(options[3])}>
          <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.bottom}>
     {ques!==9&&<TouchableOpacity style={styles.button} onPress={handlenextpress}>
           <Text style={styles.buttontext}>SKIP</Text> 
        </TouchableOpacity>} 
      {ques===9&&<TouchableOpacity style={styles.button} onPress={handleshowresult}>
           <Text style={styles.buttontext}>SHOW RESULT</Text> 
        </TouchableOpacity>}   
    </View>
        </View>
      )}

    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:'100%'
    },top:{
        marginVertical:16,
       
    },options:{
        flex:1,
        marginVertical:16
    },bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent: 'spacebetween',
        flexDirection:'row'
    },
    button:{
        backgroundColor:'#184E77',
        borderRadius:16,
        padding:12,
        paddingHorizontal:16,
        alignItems:'center',
        marginBottom:30,
    },
    buttontext:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    questext:{
        fontSize:25
    },option:{
      fontSize:18,  
      color:'white',
      fontWeight:'500'
    },
    optionbtn:{
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:'#34A0A4',
        paddingHorizontal:12,
        borderRadius:12
    },
    parent:{
        height:'100%'
    }
});
