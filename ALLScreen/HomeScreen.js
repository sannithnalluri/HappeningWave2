import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, FlatList, StyleSheet, Button } from 'react-native';
import Navbar from './Navbar';

export default function DetailScreen({ navigation }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const data = [
    { id: '1', title: 'CBIT-ELUSINM', url: 'https://www.shutterstock.com/shutterstock/photos/1423222013/display_1500/stock-vector-music-event-poster-design-template-on-colorful-background-with-flowing-shape-illustration-for-web-1423222013.jpg' },
    { id: '2', title: 'Pub', url: 'https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3975.jpg?t=st=1720032503~exp=1720036103~hmac=3fb36d3fe9cba0d1956bca8c0f53d0c87fed1c76224e27fb760ac24a2020a44b&w=740' },
    { id: '3', title: 'Saturday Party', url: "https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1720031534~exp=1720035134~hmac=55dc1d16ab84707148715236a6c5473e4ee782c40150cf44331f83039e2260cd&w=740" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate('EventDescription', { itemid: item.id }) }}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: item.url }} />
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      {toggleMenu &&
        <View style={{ zIndex: 10 }}>
          <View style={{ backgroundColor: "#556970", width: '70%', height: '100%', paddingLeft: 20 }}>
            <TouchableOpacity onPress={handleToggle}>
              <Image source={require('../assets/cross.png')} style={{ width: 30, height: 30, marginLeft: 1, marginTop: 40, marginBottom: 20 }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuIcon} onPress={() => console.log('Navigate to Setting')}>
              <Image source={require('../assets/Settings.png')} style={styles.icon} />
              <Text style={styles.menutext}>Setting</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuIcon2} onPress={() => console.log('Navigate to Privacy')}>
              <Image source={require('../assets/privacy.png')} style={styles.icon} />
              <Text style={styles.menutext}>Privacy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuIcon} onPress={() => console.log('Navigate to Terms and Conditions')}>
              <Image source={require('../assets/Terms.png')} style={styles.icon} />
              <Text style={styles.menutext}>Terms and Condition</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuIcon2} onPress={() => console.log('Navigate to Account')}>
              <Image source={require('../assets/Account.png')} style={styles.icon} />
              <Text style={styles.menutext}>Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuIcon} onPress={() => console.log('Navigate to Services')}>
              <Image source={require('../assets/Services.png')} style={styles.icon} />
              <Text style={styles.menutext}>Services</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuIcon2} onPress={() => console.log('Navigate to Report Problem')}>
              <Image source={require('../assets/Report.png')} style={styles.icon} />
              <Text style={styles.menutext}>Report Problem</Text>
            </TouchableOpacity>
          </View>
        </View>
      }

      <View style={{ backgroundColor: '#2F3CAA', height: 400 }}>
        <TouchableOpacity onPress={handleToggle}>
          <View style={{ width: 30, height: 30, borderRadius: 10, marginLeft: 20, marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/menu-white.png')} style={{ width: "90%", height: "90%" }} />
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 20, marginLeft: 30 }}>
          <Text style={{ fontSize: 40, color: 'white' }}>Hello!!</Text>
          <Text style={{ fontSize: 25, color: 'white' }}>Get All Events Near You</Text>
        </View>
{/* 
        <View style={{ backgroundColor: '#e0e0e0', marginHorizontal: 20, padding: 10, borderRadius: 10, flexDirection: 'row', marginTop: 30 }}>
          <Image source={require('../assets/search.png')} style={{ width: 30, height: 30 }} />
          <TextInput
            style={{ width: "80%", color: 'white' }}
            placeholder='Enter The Event Wanna Go...'
            placeholderTextColor='gray'
          />
          <TouchableOpacity onPress={()=>{navigation.navigate('FeedScreen',{qurey:""})}}>
            <Text>search</Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <View>
        <Text style={{ position: 'relative', bottom: 130, color: 'white', fontSize: 24, marginLeft: 40 }}>
          Trending
        </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.flatlist}
        />
      </View>

      <View style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', bottom: 130 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2F3CAA' }}>Events NearYou</Text>
      </View>

      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.flatlist2}
        />
      </View>

      <View>
        <Navbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: "80%",
    borderRadius: 10,
  },
  flatlist: {
    position: 'relative',
    bottom: 130,
  },
  flatlist2: {
    position: 'relative',
    bottom: 130,
  },
  menutext: {
    color: 'white',
    fontSize: 20,
  },
  menuIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  menuIcon2: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
});
