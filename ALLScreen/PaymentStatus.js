import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PaymentSuccess = () => {
  const navigation = useNavigation();

  // Dummy transaction details
  const transactionDetails = {
    transactionId: 'TXN123456789',
    date: '2024-07-04',
    time: '14:35:00',
    amount: '₹299',
    upiId: 'example@upi'
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/success.png')} style={styles.successImage} />
      <Text style={styles.successText}>Payment Successful!</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Transaction ID: {transactionDetails.transactionId}</Text>
        <Text style={styles.detailsText}>Date: {transactionDetails.date}</Text>
        <Text style={styles.detailsText}>Time: {transactionDetails.time}</Text>
        <Text style={styles.detailsText}>Amount: {transactionDetails.amount}</Text>
        <Text style={styles.detailsText}>UPI ID: {transactionDetails.upiId}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  successImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#4CAF50',
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
