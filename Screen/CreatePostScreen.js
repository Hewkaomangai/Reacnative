import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import react from 'react'

const CreatePostScreen = ({navigation}) => {

    const[postText,setPostText] = react.useState('');

  return (
    <View>
      <TextInput
       multiline
       placeholder='Please say something about React Native'
       style={{height:200, padding:10,backgroundColor:'white'}}
       value={postText}
       onChangeText={setPostText}/>
       <Button
        title='DOne'
        //Pass and merge parms back to index screen
        onPress={()=>{
            navigation.navigate({
                name:'Index',
                params:{post: postText},
                merge: true
            })
        }}
        />
    </View>
  )
}

export default CreatePostScreen