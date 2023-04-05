import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PreHome from './src/Pages/PreHome';
import LoginPage from './src/Pages/LoginPage';

const Stack = createNativeStackNavigator();

export default function App() {
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