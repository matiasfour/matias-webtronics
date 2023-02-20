import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 


const HeaderRight = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.goBack()}>
        <AntDesign name="back" size={32} color="purple" />
    </TouchableOpacity>
  )
}

export default HeaderRight