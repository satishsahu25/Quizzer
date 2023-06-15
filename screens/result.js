import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Title from '../components/title';
const Result = ({navigation,route}) => {

    const {score}=route.params;

  return (
    <View style={styles.container}>
     <View>
     <Title titleText='SCORE BOARD'/>
     </View>
     <View style={styles.bannerContainer}>
     <Text style={styles.scoretext}>{score}</Text>
     <Image 
      source={require('../assets/winnerimg.png')} 
      style={styles.banner}
      resizeMode='contain'
      />
     </View>

     <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
            <Text style={styles.buttontext}>Home</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Result;

const styles=StyleSheet.create({
    banner:{
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems:'center'
    },
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:'100%',
        justifyContent: 'center',
        alignItems:'center'
    },   
    button:{
        backgroundColor:'#184E77',
        borderRadius:16,
        padding:12,
        paddingHorizontal:16,
        alignItems:'center',
        marginBottom:30,
        maxWidth:'80%',
        alignSelf:'center'
    },
    buttontext:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    scoretext:{
       
        fontSize:100,
        fontWeight:'800',
    }
});

