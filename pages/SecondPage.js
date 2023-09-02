import { View, Text, Button } from 'react-native'
import React from 'react'

const SecondPage = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>This is the Second Page of the app</Text>
      <Button
       title='Go Back'
       onPress={()=>navigation.goBack()}
      />
      <Button
       title='GO TO SECONDPAGE...AGAIN'
       onPress={()=>navigation.push('SecondPage')}/>
       <Button
       title='GO TO FIRST PAGE'
       onPress={()=>navigation.navigate('FirstPage')}/>
       <Button
       title='GO TO THIRD PAGE'
       onPress={()=>navigation.navigate('ThirdPage')}/>
      </View>
  )
}

export default SecondPage