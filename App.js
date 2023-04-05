import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import PreHome from './src/Pages/PreHome';
import LoginPage from './src/Pages/LoginPage';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [dummy, setDummy] = useState(false);

  Font.loadAsync({
    'ballob':require('./src/assets/fonts/BalooTammudu2-Bold.ttf'),
    'ballor':require('./src/assets/fonts/BalooTammudu2-Regular.ttf'),
    'ballosb':require('./src/assets/fonts/BalooTammudu2-SemiBold.ttf'),
  }).then(() => {
    setDummy(true);
  })

  if(!dummy){
    return (
      <AppLoading/>
    );
  }

  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PreHome"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='PreHome' component={PreHome}/>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}