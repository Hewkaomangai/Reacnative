import { View, Text, Button } from 'react-native'
import React from 'react'

const FirstPage = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>This is the First Page of the app</Text>
      <Button
       title='GO TO SECOND PAGE'
       onPress={()=>navigation.navigate('SecondPage')}/>
    </View>
  )
}

export default FirstPage