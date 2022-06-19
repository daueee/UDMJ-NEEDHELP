import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons} from '@expo/vector-icons'

const { Screen, Navigator } = createNativeStackNavigator();

import  Login  from '../Screens/login';
import Register from '../Screens/register';
import { TabsRoutes } from './tabs.routes';
import ConfirmEmail from '../Screens/confirmEmail';
import Welcome from '../Screens/welcome';


export function StackRoutes() {
    return (
        <Navigator
         screenOptions={{
             tabBarActiveTintColor:'#604412',
             tabBarInactiveTintColor: 'gray',

         }}
         initialRouteName="Login"
        >
            <Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name='Register'
                component={Register}
            />
            <Screen
                name='Home'
                component={TabsRoutes}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='ConfirmEmail'
                component={ConfirmEmail}
            />
            <Screen
                name='Welcome'
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}