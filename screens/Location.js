import React from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import { useGetLocationQuery } from '../features/apiSlice';
import tw from 'tailwind-react-native-classnames';
import LocationDetails from '../components/LocationDetails';
import { useRoute } from '@react-navigation/native';

const Location = () => {

    const route = useRoute();
    const { locationUrl } = route.params;
    const {data: locationData, isLoading} = useGetLocationQuery(locationUrl);

    if(isLoading) {
        return <View style={tw`flex flex-1 bg-purple-700 justify-center`}>
                    <ActivityIndicator  size="large" color="#FFC300" />
               </View>
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={tw`flex flex-1 bg-purple-700`}>
           <LocationDetails location={locationData}/>
        </ScrollView>
    );
}



export default Location;
