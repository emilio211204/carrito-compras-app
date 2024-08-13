import { createStackNavigator } from '@react-navigation/stack'; 
import { LoginScreen } from '../screen/LoginScreen';

import { Component, useState } from 'react'; 
import { PRIMARY_COLOR } from '../commons/constants';
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';
import { RegisterScreen } from '../screen/RegisterScreen';


//interface - arreglo objetos 
export interface User { 
  id: number; 
  email: string; 
  password: string;
} 
 
const Stack = createStackNavigator(); 
 
export const StackNavigator = () => { //ARROW FUNCTION 
 
  //arreglo con los usuarios para iniciar sesión 
  const user: User[] = [ 
    { id: 1, email: 'dallumi2004@gmail.com', password: '123456' }, 
    { id: 2, email: 'BrianRro80@gmail.com', password: '1234567' }, 
    { id: 3, email: 'emilio@gmail.com', password: '12345678' }, 
  ]; 
 
  //hook useState: para poder gestionar la lista de usuarios - iniciar y registrar 
 
  const [usersList, setUsersList] = useState (user);  
 const handleAddUser = (user: User) => {
   setUsersList([...usersList , user]);
 }

  return ( 
    <Stack.Navigator 
      screenOptions={{ 
        cardStyle: { 
          backgroundColor: PRIMARY_COLOR 
        } 
      }}> 
      <Stack.Screen name="Login" options={{ headerShown: false }} 
      children={() => <LoginScreen users={usersList} />} /> 
      <Stack.Screen name="Register" options={{ headerShown: false }} 
      children={() => <RegisterScreen users={usersList} handleAddUser={handleAddUser}/>} /> 
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
    </Stack.Navigator> 
  ); 
}