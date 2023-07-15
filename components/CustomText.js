import { View, Text } from 'react-native'
import React from 'react'

const Name = ({fName,lname}) =>{
    return(
        <View>
            <Text>Your First Name is {fName} and Last name is {lname}.</Text>
        </View>
    )
}


const CustomText = () => {
  return (
    <View>
        <Name fName="Chanisorn!" lname="Bussabadhan" />
        <Name fName="Navin!" lname="Siripankaew"/>
    </View>
  )
}

export default CustomText