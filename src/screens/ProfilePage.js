import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { fonts, metrics } from "../themes";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default class ProfilePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ImageBackground source={require("../resources/images/AndroidMobile4.png")} resizeMode="stretch" style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1 }}>
                        <StatusBar backgroundColor="#cab082" />
                        
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});