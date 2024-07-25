import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const EventDescription = ({ route }) => {
//   const { itemid } = route.params; // Destructure itemid from route.params
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    
      <View style={styles.eventImageContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3975.jpg?t=st=1720032503~exp=1720036103~hmac=3fb36d3fe9cba0d1956bca8c0f53d0c87fed1c76224e27fb760ac24a2020a44b&w=740' }}
          resizeMode='contain'
          style={styles.eventImage}
        />
      </View>
      <View style={styles.eventContainer}>
        <Text style={styles.title}>Event Name</Text>
        <View style={styles.infoContainer}>
          <View style={styles.subContainer}>
            <Image source={require('../assets/map.png')} style={styles.icon} />
            <Text style={styles.infoText}>Location</Text>
          </View>
          <View style={styles.subContainer}>
            <Image source={require('../assets/Calender.png')} style={styles.icon} />
            <Text style={styles.infoText}>Date of Event</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>
        <View style={styles.priceContainer}>
          <Image source={require('../assets/Rupee.png')} style={styles.icon} />
          <Text style={styles.priceText}>Price: ₹299/-</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=>{navigation.navigate('PaymentStatus')}} style={styles.button}>
            <Text style={styles.buttonText}>Book Tickets</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EventDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backIcon: {
    position: 'absolute',
    top: 25,
    left: 16,
    zIndex: 10,
  },
  backImage: {
    width: 30,
    height: 30,
  },
  eventImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  eventImage: {
    width: '100%',
    height: 400,
    borderRadius: 8,
  },
  eventContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoContainer: {
    marginTop: 16,
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'row'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  descriptionContainer: {
    marginTop: 16,
    paddingHorizontal: 8,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
