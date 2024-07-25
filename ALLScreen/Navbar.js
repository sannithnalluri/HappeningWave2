import React from 'react'
import { Text, View ,Image,StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Navbar() {
  const navigation = useNavigation();  
  return (
    <View>
        <View style={styles.navbar}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} >
            <View><Image style={styles.icon} source={require("../assets/home.png")} ></Image></View>
            </TouchableOpacity>
           
              <TouchableOpacity onPress={()=>{navigation.navigate('FeedScreen')}}>
            <View><Image  style={styles.icon} source={require("../assets/feeds.png")} ></Image></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('Profile2')}}>
            <View><Image  style={styles.icon} source={require("../assets/user.png")} ></Image></View>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    icon:{
    width:30,
    height:30,
    },
    navbar:{
        backgroundColor:'#2F3CAA',
        width:"100%",
        flexDirection:'row',
        padding:10,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 60, // Example footer height
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,

    }
});
