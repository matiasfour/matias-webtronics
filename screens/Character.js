import React from 'react';
import {ScrollView, ActivityIndicator, View} from 'react-native';
import CharacterDetails from '../components/CharacterDetails';
import { useGetCharacterDataQuery, useGetEpisodesQuery } from '../features/apiSlice';
import tw from 'tailwind-react-native-classnames';
import { useNavigation, useRoute } from '@react-navigation/native';
 

const Character = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const { characterUrl } = route.params;
    const {data: characterData, isLoading} = useGetCharacterDataQuery(characterUrl);
    const {data: episodes, isLoading: isLoadingEpisodes} = useGetEpisodesQuery(characterData?.episode);

    if(isLoading) {
        return (
            <View style={tw`flex flex-1 bg-purple-700 justify-center items-center`}>
                <ActivityIndicator  size="large" color="#FFC300" />
            </View>
        )  
    }
    
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`flex flex-1 bg-purple-700`}>
                <CharacterDetails navigation={navigation} episodesData={{episodes, isLoadingEpisodes}} character={characterData}/>
            </ScrollView>
        </>
    );
}



export default Character;
