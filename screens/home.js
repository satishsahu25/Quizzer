import { View, Text,Image ,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Title titleText='Quizzer'/>
      <View style={styles.bannerContainer}>
      <Image 
      source={require('../assets/mainimage.png')} 
      style={styles.banner}
      resizeMode='contain'
      />

      </View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("Quiz")}
       style={styles.button}>
        <Text style={styles.buttontext}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles=StyleSheet.create({
    banner:{
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems:'center',
        flex:1
    },
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:'100%'
    },
    button:{
        width:'80%',
        backgroundColor:'#184E77',
        borderRadius:16,
        padding:20,
        alignItems:'center',
        marginBottom:30,
        marginLeft:30
        // marginHorizontal:20,

    },
    buttontext:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    }
})