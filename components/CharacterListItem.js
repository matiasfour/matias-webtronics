import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const CharacterListItem = ({character, navigation, routPath}) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routPath, { characterUrl: character?.url })} style={tw`flex items-center my-5 mx-auto p-2`}>
            <Image style={tw`w-40 h-40`} source={{uri: character?.image}}/>
            <Text style={tw`text-sm text-yellow-300 capitalize text-center mt-5`} >{character?.name}</Text>
        </TouchableOpacity>
    );
}


export default CharacterListItem;
