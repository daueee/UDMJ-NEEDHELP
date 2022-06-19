import { NavigationContainer } from "@react-navigation/native";
import { TabsRoutes } from "./tabs.routes";
import { StackRoutes } from "./stack.routes";




export function Routes() {
    return (
        <NavigationContainer>
            {/* <Drawer.Navigator>
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator> */}
            <StackRoutes/>
        </NavigationContainer>
    )
}