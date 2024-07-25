import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SelectUser() {
    const navigation = useNavigation();
    
    const handleBookTicketPress = () => {
        navigation.navigate('login');
    };

    const handleOrganiserPress = () => {
        navigation.navigate('CreaterLoginScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header} />
            
            <View style={styles.content}>
                <Text style={styles.headerText}>Select User Type</Text>
                
                <View style={styles.userContent}>
                    <TouchableOpacity onPress={handleBookTicketPress}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../assets/userpng.png')} style={styles.image} />
                            <Text style={styles.subText}>Book Ticket</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOrganiserPress}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../assets/innovator.png')} style={styles.image} />
                            <Text style={styles.subText}>Organiser</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#2F3CAA',
        height: 80,
        width: '100%',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    userContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    imageContainer: {
        width: 140,
        height: 140,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        elevation: 2,
        shadowColor: 'black',
        padding: 20,
        borderRadius: 20,
        borderColor:'#2F3CAA',
        borderWidth:1,
    },
    image: {
        width: 70,
        height: 70,
    },
    subText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
});
