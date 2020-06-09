import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from "./src/screens/Splash";
import OurHomepage from "./src/screens/OurHomePage";
import SettingPage from "./src/screens/SettingsPage";
import ProfilePage from "./src/screens/ProfilePage";
import LanguagePage from "./src/screens/LanguagePage";
import BottomTabPage from "./src/screens/BottomTab";
import Infopage from "./src/screens/Info";


const Stack = createStackNavigator();
export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={"none"} initialRouteName={"Splash"}>
                <Stack.Screen name="Splash" component={Splash} options={{ title: 'Splash' }} />
                <Stack.Screen name="OurHomepage" component={OurHomepage} />
                <Stack.Screen name="SettingPage" component={SettingPage} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
                <Stack.Screen name="LanguagePage" component={LanguagePage} />
                <Stack.Screen name="Infopage" component={Infopage} />
                <Stack.Screen name="BottomTabPage" component={BottomTabPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
