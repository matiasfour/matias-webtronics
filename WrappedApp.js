import { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useGetEndpointsQuery, useGetDataQuery } from './features/apiSlice';
import Navigation from './components/Navigation';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import ErrorMessage from './components/ErrorMessage';

const WrappedApp = () => {

    const navigation = useNavigation();
    const {data, isLoading: isLoadingEndpoints, error} = useGetEndpointsQuery();
    const [charactersPageUrl, setCharactersPageUrl] = useState(data?.characters);
    const {data: charactersData, isLoading: isLoadingCharacter } = useGetDataQuery(charactersPageUrl);
    
    useEffect(() => {
      setCharactersPageUrl(data?.characters);
    }, [data]);

    
    if(isLoadingEndpoints || isLoadingCharacter) {
      return <View style={tw`flex flex-1 bg-purple-700 justify-center items-center`}>
                <ActivityIndicator  size="large" color="#FFC300" />
      </View>
    }

    if(error) {
      return <View style={tw`flex flex-1 bg-purple-700 justify-center items-center`}>
                <ErrorMessage/>
            </View>
    }
    
    return (
      <View style={tw`flex flex-1 items-center bg-purple-700 pt-10`}>
        <Text style={tw`text-3xl text-yellow-300 font-bold`}>Rick & Morty API</Text>
        <Navigation navigation={navigation} data={{results: charactersData?.results, next: charactersData?.info.next}} handleNextPage={setCharactersPageUrl} />
      </View>
    )
}

  export default WrappedApp;
  
