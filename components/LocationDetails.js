import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { useGetLocationResidentsQuery } from '../features/apiSlice';
import CharacterListItem from './CharacterListItem';
import { useNavigation } from '@react-navigation/native';

const LocationDetails = ({location}) => {

    const navigation = useNavigation();
    const {data: residentsData, isLoading} = useGetLocationResidentsQuery(location.residents);

    if(isLoading) {
      return <ActivityIndicator size="large" color="#FFC300" />
    }
  
  return (
    <View style={tw`flex items-center w-full mt-20`}>
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Name: {location?.name}</Text> 
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Type: {location?.type}</Text> 
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Dimension: {location?.dimension}</Text> 
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Residents:</Text> 
      {
        residentsData && residentsData.map(resident => (<CharacterListItem routPath="resident" key={resident.id} navigation={navigation} character={resident} />))
      }
    </View>
  )
}

export default LocationDetails