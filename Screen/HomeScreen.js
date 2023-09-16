import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      {/* <Text>Home Screen</Text>
      <Text> Initial param : itemID - {itemID}{'\n'}</Text>
      <Button
       title='Update param'
       onPress={()=> navigation.setParams({
        itemID: Math.floor(Math.random()*100)
       })}/> */}
       <Text>{'\n'}</Text>
      <Button
       title='Go to Details'
       onPress={()=>{
        //1.Navigate to the Details route with params
        navigation.navigate('Details',{
          itemId : 1088,
          otherParam: 'React Native App'
        })
       }}/>
    </View>
  )
}

export default HomeScreen