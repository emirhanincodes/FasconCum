import React,{useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen  from '../screens/SignupScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = createStackNavigator();

const AuthStack = () => {
 
    const [ isFirstLaunch, setIsFirstLaunch ]= useState(null);
 
    useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch = (true)
      } else {
        setIsFirstLaunch = (false)
      }
    })
  }, [])

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
      routeName= 'Onboarding'
  }
    return (
     
     <Stack.Navigator initialRouteName={routeName}>
         
        <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header:() => null}} 
        />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header:() => null}} 
        />
        <Stack.Screen 
        name="Signup"
        component={SignupScreen}

        />

     </Stack.Navigator>

    )
}
export default AuthStack;