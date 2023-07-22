import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button } from 'react-native';

const IncrementCounter = () => {

    const[age, setAge] = useState(23);

    const increment3 = ()=>{
        setAge(a => a + 3);
    }
    const increment1 = ()=>{
        setAge(a => a + 1);
    }

  return (
    <View style ={styles.container}>
      <Text style={{fontSize:24, fontStyle:'bold'}}>
        Your age: {age}
      </Text>
      <Text>{'\n\n'}</Text>
      <Button
      title='+3'
      onPress={increment3}/>
      <Text>{'\n\n'}</Text>
      <Button
      title='+1'
      onPress={increment1}/>
    </View>
  )
}

export default IncrementCounter

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})