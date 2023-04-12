import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import PreHome from './src/Pages/PreHome';
import LoginPage from './src/Pages/LoginPage';
import HomePage from './src/Pages/HomePage';
import CadPage1 from './src/Pages/CadPage1';
import CadPage2 from './src/Pages/CadPage2';

const Stack = createNativeStackNavigator();

export default function App() {

  const [dummy, setDummy] = useState(false);

  Font.loadAsync({
    'ballob':require('./src/assets/fonts/BalooTammudu2-Bold.ttf'),
    'ballor':require('./src/assets/fonts/BalooTammudu2-Regular.ttf'),
    'ballosb':require('./src/assets/fonts/BalooTammudu2-SemiBold.ttf'),
    'reemr':require('./src/assets/fonts/ReemKufiInk-Regular.ttf'),
  }).then(() => {
    setDummy(true);
  })

  if(!dummy){
    return (
      <AppLoading/>
    );
  }

  return (
    <>
      <StatusBar 
      translucent
      backgroundColor='transparent'
      barStyle='light-content'/>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="PreHome"
        screenOptions={{
        headerShown: false}}>
          <Stack.Screen name='PreHome' component={PreHome}/>
          <Stack.Screen name='LoginPage' component={LoginPage}/>
          <Stack.Screen name='HomePage' component={HomePage}/>
          <Stack.Screen name='CadPage1' component={CadPage1}/>
          <Stack.Screen name='CadPage2' component={CadPage2}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}