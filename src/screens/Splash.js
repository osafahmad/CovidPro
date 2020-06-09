import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';


export default class Splash extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    { name: "BottomTabPage" }
                  ],
                })
              );
        }, 3000);
    }

    render() {
        return (
            <ImageBackground source={require("../resources/images/AndroidMobile1.png")} resizeMode="cover" style={{ flex: 1 }} resizeMode="cover">
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor="transparent" translucent />
                    <View style={styles.mainView}>
                        {/* <Image source={require("../resources/images/nrtLogo.png")} /> */}
                    </View>
                </View>
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