// App.js
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import WelcomeScreen from './Components/WelcomeScreen';
import LoginScreen from './Components/LoginScreen';
import SignupScreen from './Components/SignupScreen';
import HomeScreen from './ALLScreen/HomeScreen';
import DetailScreen from './ALLScreen/DetailScreen';
import ProfileScreen from './ALLScreen/ProfileScreen';
import UploadEventScreen from './ALLScreen/UploadEvent';
import FeedScreen from './ALLScreen/FeedScreen';
import ProfileScreen2 from './ALLScreen/ProfileScreen2';
import SelectUser from './Components/SelectUser';
import EventDescription from './ALLScreen/EventDescription';
import PaymentSuccess from './ALLScreen/PaymentStatus';
import CreaterLoginScreen from './Components/CreaterLogin';
import CreaterSignup from './Components/CreateSingupScreen';
import DashboardScreen from './InnovaterScreens/DashBoardScreen';
import ExploreScreen from './InnovaterScreens/ExploreScreen';
import InnovaterProfileScreens from './InnovaterScreens/InnovatorProfileScreen';
import ForgotPassword from './Components/ForgotPassword';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="welcome" options={{ headerShown: false }} component={WelcomeScreen} />
          <Stack.Screen name="login" options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name="CreaterLoginScreen" options={{ headerShown: false }} component={CreaterLoginScreen} />
          <Stack.Screen name="selectUser" options={{ headerShown: false }} component={SelectUser} />
          <Stack.Screen name="signup" options={{ headerShown: false }} component={SignupScreen} />
          <Stack.Screen name="CreaterSignupScreen" options={{ headerShown: false }} component={CreaterSignup} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="DetailScreen" options={{ headerShown: false }} component={DetailScreen} />
          <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
          <Stack.Screen name="Profile2" options={{ headerShown: false }} component={ProfileScreen2} />
          <Stack.Screen name="UploadEventScreen" options={{ headerShown: false }} component={UploadEventScreen} />
          <Stack.Screen name="FeedScreen" options={{ headerShown: false }} component={FeedScreen} />
          <Stack.Screen name="EventDescription" options={{ headerShown: false }} component={EventDescription} />
          <Stack.Screen name="PaymentStatus" options={{ headerShown: false }} component={PaymentSuccess} />
          <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} component={ForgotPassword} />


          <Stack.Screen name="DashBoardScreen" options={{ headerShown: false }} component={DashboardScreen} />
          <Stack.Screen name="ExploreScreen" options={{ headerShown: false }} component={ExploreScreen} />
          <Stack.Screen name="InnovatorProfileScreen" options={{ headerShown: false }} component={InnovaterProfileScreens} />


        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
