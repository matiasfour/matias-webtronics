import React from 'react';
import {FlatList} from 'react-native';
import CharacterListItem from './CharacterListItem';
import tw from 'tailwind-react-native-classnames';


const Navigation = ({data, navigation, handleNextPage}) => {

    return (
        <FlatList
            contentContainerStyle={tw`flex justify-center items-center mx-0`}
            style={tw`w-full`}
            data={data.results}
            renderItem={({item}) => <CharacterListItem routPath="character" key={item.id} navigation={navigation} character={item} /> }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            onEndReached={() => handleNextPage(data.next)}
        />
    );
}


export default Navigation;
