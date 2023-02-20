import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const EpisodeListItem = ({episode, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('episode', { episode })} style={tw`flex items-center justify-center w-6/12 h-10 mt-5 bg-yellow-300 rounded-md`}>
             <Text style={tw`text-center`}>{episode.name}</Text>
        </TouchableOpacity>
    );
}

export default EpisodeListItem;
