import { View, Text, Button } from 'react-native'
import React from 'react'

const ThirdPage = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>This is Third Page of the App</Text>
      <Text>{'\n'}</Text>
      <Button 
      title='Go Back'
      onPress={()=>navigation.goBack()}
      />
      <Button 
      title='Go to SecondPage'
      onPress={()=>navigation.push('SecondPage')}
      />

      <Button 
      title='Reset Navigator to First Page'
      onPress={()=>navigation.navigate('FirstPage')}
      />
    </View>
  )
}

export default ThirdPage