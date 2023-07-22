import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'

const Form = () => {

    const[name, setName] = useState('')
    const[age, setAge] = useState(42)
    const Ageincrement = () =>{
        setAge(a => a + 1)
    }

  return (
    <View style = {styles.container}>
      <TextInput
      placeholder='Name'
      style = {styles.textInputStyle}
      value={name}
      onChangeText={(value) => {setName(value)}}/>
      <Text>{'\n'}</Text>
      <Button
      title='INCREMENT AGE'
      onPress={Ageincrement}/>
      <Text>{'\n'}</Text>
      <Text>Hello,{name}. You are {age}</Text>
      
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    textInputStyle:{
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15
    }
})