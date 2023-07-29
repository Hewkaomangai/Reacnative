import { StyleSheet, Text, View ,Button,TextInput} from 'react-native'
import React, { useState } from 'react'

const RecapLogin = () => {

    const submit = () =>{
        alert("email : " + textInputEmail + "\nPassword : " + TextInputPass);
    };

    const[textInputEmail,setEmail] = useState("");
    const[textInputPass,setPass] = useState("");

  return (
    <View>
      <TextInput
        placeholder='Email'
        style={styles.TextInputStyle}
        value={textInputEmail}
        onChangeText={(value) => setEmail(value)}/>

        <TextInput
        placeholder='Password'
        style={styles.TextInputStyle}
        value={textInputPass}
        onChangeText={(value) => setPass(value)}/>

        <Text>{'\n\n'}</Text>

        <Button
        style={styles.subButton}
        title='SUBMIT'
        onPress={() => submit}/>
    </View>
  )
}

export default RecapLogin

const styles = StyleSheet.create({
    container : {
        flex:1,
        padding:35,
    },
    TextInputStyle:{
        width:'100%',
        height:40,
        width:400,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15,
    },
    subButton:{
        backgroundColor:'#555',
        padding:10,
        margin:15,
        height:40,
    },
    subButtonText:{
        color:'white',
    },
})