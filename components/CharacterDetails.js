import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import EpisodeListItem from './EpisodeListItem';

const CharacterDetails = ({character, episodesData, navigation}) => {
  return (
    <View style={tw`flex flex-1 items-center w-full mt-20`}>
      <Image style={tw`w-40 h-40`} source={{uri: character?.image}}/>
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Character: {character?.name}</Text> 
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Species: {character?.species}</Text> 
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Type: {character?.type !== "" ? character?.type : 'Unknown' }</Text> 
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Status: {character?.status}</Text> 
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Gender: {character?.gender}</Text> 
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Origin: {character?.origin.name}</Text> 
      <Text style={tw`text-xl text-yellow-300 capitalize text-center mt-5`} >Location:</Text> 
      <TouchableOpacity onPress={() => navigation.navigate('location', { locationUrl: character?.location.url })} style={tw`bg-yellow-300 flex items-center p-2 rounded-md mt-5`}>
        <Text>See location {character?.location.name}</Text>
      </TouchableOpacity>
      <Text style={tw`text-xl text-yellow-300 capitalize text-center my-5`} >Episodes:</Text> 
      {
        episodesData.episodes && episodesData.episodes.map(episode => (
            <EpisodeListItem key={episode.id} navigation={navigation} episode={episode} />
        ))
      }
    </View>
  )
}

export default CharacterDetails