import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native'
import Home from './screen/Home';
import Surah from './screen/Surah';
import 'expo-dev-client';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Startpage from './screen/startpage';
import Languages from './screen/Languages';
import Quran from './screen/Quran';
import Audio from './screen/Audio';
import Busla from './screen/busla';

import Azkar from './screen/Azkar';

const Stack = createNativeStackNavigator();
const Apps = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Startpage" component={Startpage} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Surah' component={Surah} />
      <Stack.Screen name='Languages' component={Languages} />
      <Stack.Screen name='Quran' component={Quran} />
      <Stack.Screen name='Audio' component={Audio} />
      <Stack.Screen name='busla' component={Busla} />
      <Stack.Screen name='Azkar' component={Azkar} />
    </Stack.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Apps />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
