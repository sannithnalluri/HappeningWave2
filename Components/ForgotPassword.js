import { StatusBar } from "expo-status-bar";
import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function ForgotPassword({ navigation }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = 'https://eventwave-3dpz.onrender.com';

  const handleButton = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(`${API_URL}/auth/forgotPassword`, {
        username,
      });

      if (response.status >= 200 && response.status < 300) {
        setError("New Password was send to the register Id ")
        console.log('Registration successful:', response.data);
        navigation.navigate('login');  
      } else {
        setError('Registration failed. Please try again.');
        console.log('Registration failed with status:', response.status);
      }
    } catch (error) {
      console.error('Registration request failed:', error);
      setError(error.response ? error.response.data.message : 'An error occurred');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} resizeMode="contain"  />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={handleButton} style={styles.loginBtn}>
        <Text style={styles.loginText}>Get Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.signup}>
        <Text style={styles.signupText}>Already Have an Account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: 200,
    height: 200
  },
  inputView: {
    backgroundColor: "#F6f6f6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#2F3CAA",
  },
  loginText: {
    color: 'white'
  },
  signupText: {
    color: 'blue',
    fontSize: 16,
  },
  signup: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  }
});
