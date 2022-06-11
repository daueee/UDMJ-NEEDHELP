import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons} from '@expo/vector-icons'

const { Screen, Navigator } = createDrawerNavigator();

import { Cliente } from '../Screens/cliente';
import { Home } from '../Screens/home';
import { Login } from '../Screens/login';



export function DrawerRoutes() {
    return (
        <Navigator
         screenOptions={{
             tabBarActiveTintColor:'#604412',
             tabBarInactiveTintColor: 'gray'
         }}
         initialRouteName="Login"
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    drawerIcon: ({color, size}) => (
                        <MaterialIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    ),
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
                    drawerIcon: ({color, size}) => (
                        <MaterialIcons
                            name='people'
                            color={color}
                            size={size}
                        />
                    ),
                    title: 'Cadastro de usuário',
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
                    drawerIcon: ({color, size}) => (
                        <MaterialIcons
                            name='people'
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false,
                    tabBarVisible: false,
                    title: 'Login',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'steelblue'
                    },
                    headerTintColor: '#FFF'
                }}
            />
        </Navigator>
    )
}