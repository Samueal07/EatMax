import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import {useSelector} from "react-redux"
import { selectRestaurant } from '../features/restaurantSlice'
import { XMarkIcon } from 'react-native-heroicons/solid'
import Logo from '../components/Naan/Logo.png';
import * as Progress from 'react-native-progress'; 
import MapView,{Marker} from "react-native-maps";
const Logo_Image=Image.resolveAssetSource(Logo).uri;

const FinalScreen = () => {

    const navigation=useNavigation();
    const restaurant=useSelector(selectRestaurant);
  return (
    <View className="bg-[#E97451] flex-1">
      <SafeAreaView className="z-50">
        
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity
            onPress={()=>navigation.navigate("Home")}>

             <XMarkIcon color="white" size={30}/>   
            </TouchableOpacity>

            <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between">


            <View>

                    <Text className="text-md text-gray-400">Estimated Time</Text>
                    <Text className="text-3xl font-bold">30-40 Minutes</Text>
                </View>

                <Image
                source={

                    {uri:Logo_Image} 
                   }
                   className="h-20 w-20"
                ></Image>
            </View>

                   <Progress.Bar size={30} color="#E97451" indeterminate={true}/>
                   <Text className="mt-3 text-gray-500">
                Your order  is being Prepared
                </Text>  
            </View>
                
            
        </SafeAreaView>

        <MapView
            initialRegion={{

                latitude:18.4599996160501, 
                longitude:73.87749191259196,
                latitudeDelta:0.005,
                longitudeDelta:0.005
            }
        }
        className="flex-1 -mt-10 z-0"
        mapType='mutedStandard'
            
            >


            </MapView>

        <Marker
         coordinate={{

            latitude:18.4599996160501,
            longitude:73.87749191259196
         }}
         title="Gokul Pure Veg"
         description='Have the most delicious veg Food of Katraj'
         identifier='origin'
         pinColor='#E97451'
        />

        <SafeAreaView  className="bg-white flex-row items-center space-x-5 h-28">

<Image
source={
    {uri:Logo_Image} 
}

className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"

/>

<View className="flex-1">

    <Text className="text-lg">
        Samueal Dsouza
    </Text>
    <Text className="text-gray-400">Your Rider</Text>
</View>
    <Text className="text-[#E97451] text-lg mr-5 font-bold"> Call</Text>
        </SafeAreaView>
    </View>
  )
}

export default FinalScreen