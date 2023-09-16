import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screen/HomeScreen'
import DetailsScreen from './Screen/DetailsScreen'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName='FirstPage'
       screenOptions={{
        headerStyle:{
          backgroundColor:'#008b8b'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
       }}>
        <Stack.Screen 
         name='FirstPage' 
         component={FirstPage}
         options={{title:'FirstPage'}}/>
         <Stack.Screen 
         name='SecondPage' 
         component={SecondPage}/>
         <Stack.Screen 
         name='ThirdPage' 
         component={ThirdPage}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})