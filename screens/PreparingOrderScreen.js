import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {useNavigation} from "@react-navigation/native"
const PreparingOrderScreen = () => {

  const navigation=useNavigation();

  useEffect(()=>{

    setTimeout(() => {
      navigation.navigate("FinalScreen")
    }, 4000);
  },[])
  return (
    <SafeAreaView className="bg-[#E97451] flex-1 justify-center items-center">
      
      <Animatable.Image
      
      source={require("../assets/outro.gif")}
      animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Order Confirmation!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white"/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen