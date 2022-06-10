import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";
import { TabsRoutes } from "./tabs.routes";

// import Login from './src/Screens/login'
// import { Home } from './src/Screens/home'


export function Routes() {
    return (
        <NavigationContainer>
            {/* <Drawer.Navigator>
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator> */}
            <TabsRoutes/>
        </NavigationContainer>
    )
}