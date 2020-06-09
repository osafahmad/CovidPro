// import * as React from 'react';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./OurHomePage";
import Settings from "./SettingsPage";
import Profile from "./ProfilePage";
import Language from "./LanguagePage";
import Info from "./Info";

import { Icon } from 'native-base';

const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
    render() {
        return (
            // <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'سەرەکی') {
                        iconName = focused ? 'home' : 'home';
                    }
                    else if (route.name === 'پرۆفایل') {
                        iconName = focused ? 'ios-contact' : 'ios-contact';
                    }
                    else if (route.name === 'زمان') {
                        iconName = focused ? 'ios-laptop' : 'ios-laptop';
                    }
                    else if (route.name === 'ڕێکخستنەکان') {
                        iconName = focused ? 'settings' : 'settings';
                    }
                    else if (route.name === 'زانیاری') {
                        iconName = focused ? 'ios-briefcase' : 'ios-briefcase';
                    }
                   

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })} tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#182e46',
                activeBackgroundColor: "#cab082",


            }}>
                <Tab.Screen name="سەرەکی" component={Home} initialParams={this.props} />
                <Tab.Screen name="پرۆفایل" component={Profile} initialParams={this.props} />
                <Tab.Screen name="زمان" component={Language} initialParams={this.props} />
                <Tab.Screen name="ڕێکخستنەکان" component={Settings} initialParams={this.props} />
                <Tab.Screen name="زانیاری" component={Info} initialParams={this.props} />
                
                
                {/* <Tab.Screen name="Profile" component={Profile} initialParams={this.props} />
                <Tab.Screen name="Privacy" component={Privacy} initialParams={this.props} />
                <Tab.Screen name="Terms" component={Terms} initialParams={this.props} /> */}


            </Tab.Navigator>
            // </NavigationContainer>
        );
    }
}