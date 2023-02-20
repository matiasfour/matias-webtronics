import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import { useGetEpisodeCharactersQuery } from '../features/apiSlice';
import CharacterListItem from './CharacterListItem';
import tw from 'tailwind-react-native-classnames';

const  EpisodeDetails = ({episode, navigation}) => {

    const {data: episodeCharacters, isLoading: isLoadingEpisodeCharacters} = useGetEpisodeCharactersQuery(episode?.characters);

    return (
        <View style={tw`flex items-center p-10`}>
            <Text style={tw`mt-10 text-4xl text-yellow-300 text-center`}>{episode.name}</Text>
            <Text style={tw`mt-2 text-xl text-yellow-300`}>{episode.air_date}</Text>
            <Text style={tw`mt-2 text-xl text-yellow-300`}>{episode.episode}</Text>
            <Text style={tw`mt-20 text-xl text-yellow-300`}>Characters:</Text>
            {
                isLoadingEpisodeCharacters && <ActivityIndicator size="large" color="#FFC300" style={tw`mt-20`} />
            }
            {
                episodeCharacters && episodeCharacters.map((character) => <CharacterListItem routPath="characterEpisode" key={character.id} navigation={navigation} character={character} />)
            }
        </View>
    );
}

export default EpisodeDetails;
