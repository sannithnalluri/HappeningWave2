import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from 'react-native';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require("../assets/backgroundimage.jpg")} style={styles.backgroundImage}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  

  handleGetStarted = () => {
    this.props.navigation.navigate('selectUser')
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
  },
  button: {
    backgroundColor: '#007AFF', // Example button color
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    width:200,
    marginBottom:'20%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
