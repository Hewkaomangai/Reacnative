import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style = {[styles.container,{flexDirection:'column'}]}>

      {/* <View style = {{flex:1,backgroundColor:'red'}}/>
      <View style = {{flex:2,backgroundColor:'green'}}/>
      <View style = {{flex:3,backgroundColor:'blue'}}/> */}
      <View style = {{flex:1,backgroundColor:'yellow'}}/>
      <View style = {{flex:1,backgroundColor:'pink'}}/>
      <View style = {{flex:1,backgroundColor:'black'}}/>

    </View>
  )
}

export default App

const styles = StyleSheet.create({

    container:{
      flex:1
    }
  
})