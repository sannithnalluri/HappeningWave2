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
import { encode } from 'base-64';  

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  
  const API_URL = 'https://eventwave-3dpz.onrender.com';

  const login = async () => {
    setLoading(true);
    setError('');

    const credentials = `${email}:${password}`;
    const encodedCredentials = encode(credentials); 

    console.log("Sending login request...");
    console.log("API URL:", `${API_URL}/auth/login`);
    console.log("Encoded Credentials:", encodedCredentials);

    try {
      const response = await axios.post(`${API_URL}/auth/login`, null, {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
        },
      });

      console.log("Response Status:", response.status);
      console.log("Response Data:", response.data);

      if (response.status >= 200 && response.status < 300) {
        console.log('Login successful:', response.data);
        navigation.navigate("Home");
      } else {
        setError('Login failed. Please try again.');
        console.log('Login failed with status:', response.status);
      }
    } catch (error) {
      console.error('Login request failed:', error);  // Log the entire error object
      setError(error.response ? error.response.data.message : 'An error occurred');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} resizeMode="contain" />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("ForgotPassword")}}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={login} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('signup')} style={styles.signup}>
        <Text style={styles.signupText}>Doesn't Have an Account? Sign up</Text>
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
  }
});
