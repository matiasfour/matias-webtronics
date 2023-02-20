import React from 'react';
import {View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

const ErrorMessage = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center`}>
            <Text style={tw`mb-10 text-3xl text-yellow-300 `}>An error occured</Text>
            <MaterialIcons name="error" size={48} color="yellow" />
            <AntDesign style={tw`mt-10`} onPress={() => navigation.navigate('home')}  name="back" size={48} color="yellow" />

        </View>
    );
}

export default ErrorMessage;
