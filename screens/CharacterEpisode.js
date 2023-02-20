import React from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import CharacterDetails from '../components/CharacterDetails';
import { useGetCharacterDataQuery, useGetEpisodesQuery } from '../features/apiSlice';
import tw from 'tailwind-react-native-classnames';


const CharacterEpisode = ({route, navigation}) => {

    const { characterUrl } = route.params;
    const {data: characterData, isLoading} = useGetCharacterDataQuery(characterUrl);
    const {data: episodes, isLoading: isLoadingEpisodes} = useGetEpisodesQuery(characterData?.episode);
    
    if(isLoading){
        return <View style={tw`flex flex-1 bg-purple-700 justify-center`}>
                    <ActivityIndicator  size="large" color="#FFC300" />
               </View>
    }
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`flex flex-1 bg-purple-700`}>
                <CharacterDetails navigation={navigation} episodesData={{episodes, isLoadingEpisodes}} character={characterData}/>
            </ScrollView>
        </>
    );
}



export default CharacterEpisode;
