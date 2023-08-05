import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'

const TouchablePratice = () => {
  return (
    <View style = {styles.container}>

      <TouchableOpacity style = {styles.buttonFaceBookStyle}>
        <Image 
            style={styles.buttonImageIconStyle} 
            source={require('../assets/facebook.png')}/>
        <View style = {styles.buttonIconSeparatorStyle}/>
        <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonGPlusStyle}>
        <Image 
            style={styles.buttonImageIconStyle} 
            source={require('../assets/google-plus.png')}/>
        <View style = {styles.buttonIconSeparatorStyle}/>
        <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
      </TouchableOpacity>

    </View>
  )
}

export default TouchablePratice

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: '100%',
        borderRadius: 5,
        margin: 5,
    },
    buttonFaceBookStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        height: 40,
        width: '100%',
        borderRadius: 5,
        margin: 5
    },
    buttonImageIconStyle:{
        padding:10,
        margin:5,
        height:25,
        width:25,
        resizeMode: 'stretch'
    },
    buttonTextStyle:{
        color: '#fff',
        marginBottom:4,
        marginLeft:10
    },
    buttonIconSeparatorStyle:{
        backgroundColor: '#fff',
        width: 1,
        height: 40
    }
})