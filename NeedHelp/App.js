import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import { Login } from './src/Screens/login'
import { Home } from './src/Screens/home'
import { Cliente } from './src/Screens/cliente'
import { Routes } from './src/Routes';




// function Tabs(){
//     // <Tab.Navigator>
//     //     <Tab.Screen name="Home" component={Home}/>
//     // </Tab.Navigator>
// }

export default function App() {
  return (
      <Routes/>
  );
}