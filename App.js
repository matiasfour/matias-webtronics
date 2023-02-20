import { store } from './store'
import { Provider } from 'react-redux'
import WrappedApp from './WrappedApp';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiRickMorty } from './features/apiSlice';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Character from './screens/Character';
import Location from './screens/Location';
import Episode from './screens/Episode';
import CharacterEpisode from './screens/CharacterEpisode';
import HeaderRight from './components/HeaderRight';

export default function App() {

  const Stack = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef();

  return (
    <Provider store={store}>
      <ApiProvider api={apiRickMorty}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='home'>
              <Stack.Screen name="home" component={WrappedApp} />
              <Stack.Screen name="character" component={Character} options={{headerLeft: () => ( <HeaderRight/> )}} />
              <Stack.Screen name="location" component={Location} options={{headerLeft: () => ( <HeaderRight/> )}} />
              <Stack.Screen name="resident" component={Character} options={{headerLeft: () => ( <HeaderRight/> )}} />
              <Stack.Screen name="episode" component={Episode} options={{headerLeft: () => ( <HeaderRight/> )}} />
              <Stack.Screen name="characterEpisode" component={CharacterEpisode} options={{headerLeft: () => ( <HeaderRight/> )}} />
            </Stack.Navigator>
          </NavigationContainer>
      </ApiProvider>
    </Provider>
  );
}
