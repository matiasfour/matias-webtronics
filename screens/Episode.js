import React from 'react';
import {ScrollView} from 'react-native';
import EpisodeDetails from '../components/EpisodeDetails';
import tw from 'tailwind-react-native-classnames';
import { useNavigation, useRoute } from '@react-navigation/native';

const Episode = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { episode } = route.params;

    return (
        <>
          <ScrollView showsVerticalScrollIndicator={false}
           style={tw`flex flex-1 bg-purple-700`}>
            <EpisodeDetails episode={episode} navigation={navigation} />
          </ScrollView>
        </>
    );
}


export default Episode;
