import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import MyInput from './components/MyInput'
// import IncrementCounter from './components/IncrementCounter'
// import Form from './components/Form'
// import Login from './components/Login'
// import RecapLogin from './components/RecapLogin'
import DefineStyle from './components/DefineStyle'

const App = () => {
  return (
    <View style = {styles.container}>
        {/* <MyInput/> */}
        {/* <IncrementCounter/> */}
        {/* <Form/> */}
        {/* <Login/> */}
        {/* <React/> */}
        <DefineStyle/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})