import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native';

const Login = () => {

    const checkTextInput = () =>{
        if(!textInputName.trim()){
            alert('Please Enter Name');
            return;
        }
        else if(!textInputEmail.trim()){
            alert('Please Enter Email');
            return;
        }
        else
            alert('Success')
            return;
    }

    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');

  return (
    <View style = {styles.container}>
      <TextInput
      placeholder='Name'
      style = {styles.textInputStyle}
      value={textInputName}
      onChangeText={(value)=>setTextInputName(value)}/>
      <TextInput
      placeholder='Email'
      style = {styles.textInputStyle}
      value={textInputEmail}
      onChangeText={(value)=>setTextInputEmail(value)}/>
      <Text>{'\n'}</Text>
      <Button
      title='SUMMIT'
      onPress={checkTextInput}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 35,
    },
    textInputStyle:{
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
})