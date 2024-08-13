import React from 'react'
import 'react-native-gesture-handler';
// import { LoginScreen } from './src/screen/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator} from './src/navigator/StackNavigator';
 const App = () => {
  return (
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;
