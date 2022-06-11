import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons} from '@expo/vector-icons'

const { Screen, Navigator } = createBottomTabNavigator();

import { Cliente } from '../Screens/cliente';
import { Home } from '../Screens/home';
import { Login } from '../Screens/login';


export function TabsRoutes({navigation,route}) {
    return (
        <Navigator
         screenOptions={{
             tabBarActiveTintColor:'#604412',
             tabBarInactiveTintColor: 'gray',

         }}
         initialRouteName="Login"
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#604412'
                    },
                    headerTintColor: 'white',
                    title:'Tela inicial',
                    
                }}
            />
            <Screen
                name='Cliente'
                component={Cliente}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name='people'
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false,
                    title: 'Clientes',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'steelblue'
                    },
                    headerTintColor: '#FFF'
                }}
            />
            <Screen
                name='Login'
                component={Login}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name='people'
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: true,
                    title: 'Acessar',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#604412'
                    },
                    headerTintColor: '#FFF'
                }}
            />
        </Navigator>
    )
}