import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet,FlatList,Image,TextInput, Button, TouchableOpacity } from 'react-native';
export default function FeedScreen({navigation}) {
  const [location,setLocation]  = useState('select location');
  const [loc_press,setPress] = useState(false);
  

  const handleInputChange=(TextInput)=>{
    setLocation(TextInput)
  }
  const handleFindEvent=()=>{
    setPress(false);
  }
  const data = [
    { id: '1', title: 'CBIT-ELUSINM', url: 'https://www.shutterstock.com/shutterstock/photos/1423222013/display_1500/stock-vector-music-event-poster-design-template-on-colorful-background-with-flowing-shape-illustration-for-web-1423222013.jpg' },
    {id:'2',title:'Pub',url:'https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3975.jpg?t=st=1720032503~exp=1720036103~hmac=3fb36d3fe9cba0d1956bca8c0f53d0c87fed1c76224e27fb760ac24a2020a44b&w=740'},   
    {id:'3',title:'Satruday Party',url:"https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1720031534~exp=1720035134~hmac=55dc1d16ab84707148715236a6c5473e4ee782c40150cf44331f83039e2260cd&w=740"}, 
    {id:'',title:'',url:""}, 
    {id:'',title:'',url:""}, 
    {id:'',title:'',url:""}, 
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate('EventDescription',{itemid:item.id})}}>
    <View style={styles.card}>
      {item.url && <Image style={styles.image} source={{ uri: item.url }} />}
      <Text style={{fontSize:18}}>{item.title}</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
   <View style={{height:150,backgroundColor:'#2F3CAA'}}>
        <View style={{backgroundColor:'#f6f6f6',marginHorizontal:20,padding:10,borderRadius:10,flexDirection:'row',
            marginTop:70
            }}>
            <View><Image source={require('../assets/search.png')} style={{width:30,height:30}}></Image></View>
            <TextInput  style={{width:"80%",color:'white'}}
            placeholder='Enter The Event Wanna Go...'></TextInput>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=>{setPress(true)}}>
          <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/location-white.png')} style={{width:20,height:20,marginTop:5}}/>
          <Text style={{color:'white',marginTop:5}}>{location}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/date.png')} style={{width:20,height:20,marginLeft:40,marginTop:5}}/>
          <Text style={{color:'white',marginTop:5}}> 24-05-2024</Text>
        </View>
          </TouchableOpacity> 
        
        </View>
     
   </View>
      

   {loc_press?
        <View>
            <View style={{backgroundColor:'grey',height:"40%",width:"80%",marginTop:60,borderRadius:10,elevation:5,marginHorizontal:40,justifyContent:'center'}}>
              <Text style={{color:"white",fontSize:24,textAlign:'center',margin:20}}>Select Location</Text>
              <TextInput  onChangeText={handleInputChange}
        value={location} placeholder='Enter Location' placeholderTextColor="black" height={40} borderRadius={5} padding={10} marginHorizontal={10} backgroundColor="white"></TextInput>
              <View style={{margin:10,}}>
                <Button  onPress={handleFindEvent}title='Find Events'/>
            </View>
            </View>
            
      </View>:
    
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        
      }
      <View>
        <View style={styles.navbar}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} >
            <View><Image style={styles.icon} source={require("../assets/home.png")} ></Image></View>
            </TouchableOpacity>
           
              <TouchableOpacity onPress={()=>{navigation.navigate('FeedScreen')}}>
            <View><Image  style={styles.icon} source={require("../assets/feeds.png")} ></Image></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('UploadEventScreen')}}>
            <View><Image  style={styles.icon} source={require("../assets/add.png")} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile2')}}>
            <View><Image  style={styles.icon} source={require("../assets/user.png")} ></Image></View>
            </TouchableOpacity>
        </View>
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'stretch', 
  },
  contentContainer: {
    flexGrow: 1, 
    justifyContent: 'center', 
  },
  card: {
    width: '90%',
    height: 'auto',
    backgroundColor: '#f6f6f6',
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20,
    elevation:2,
    shadowOffset:2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    borderColor:"#2F3CAA",
    borderRadius:1,
  },
  navbar:{
    backgroundColor:'#2F3CAA',
    width:"100%",
    flexDirection:'row',
    padding:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60, // Example footer height
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top:10
}
});
