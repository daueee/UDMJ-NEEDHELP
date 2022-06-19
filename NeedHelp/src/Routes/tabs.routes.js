import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons} from '@expo/vector-icons'

const { Screen, Navigator } = createBottomTabNavigator();

import { Perfil } from '../Screens/perfil';
import { Home } from '../Screens/home';
import  Login  from '../Screens/login';


export function TabsRoutes({navigation,route}) {
    return (
        <Navigator
         screenOptions={{
             tabBarActiveTintColor:'#FFF',
             tabBarInactiveTintColor: 'gray',
             tabBarActiveBackgroundColor: '#604412',
             tabBarInactiveBackgroundColor: '#604412'

         }}
        >
            <Screen
                name='InicioApp'
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
                name='Perfil'
                component={Perfil}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name='person'
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false,
                    title: 'Perfi',
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