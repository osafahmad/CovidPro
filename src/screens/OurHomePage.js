import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, Image, ScrollView, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default class OurHomepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }

    }
    componentDidMount() {
        this.setState({ isLoading: true })
    }
    hideSpinner = () => {
        this.setState({ isLoading: false })
    }
    render() {
        return (
            // <ImageBackground source={require("../resources/images/bg1.png")} resizeMode="cover" style={{ flex: 1 }} resizeMode="cover">
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1 }}>
                        <StatusBar backgroundColor="#cab082" />
                        <WebView
                            onLoad={this.hideSpinner}
                            style={{ flex: 1 }}
                            source={{ uri: "http://corona.zkurd.org/" }}
                        />
                        {this.state.isLoading && (
                            <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, justifyContent:"center", alignItems:"center" }}>
                                <ActivityIndicator
                                    size="large"
                                    color="red"
                                />
                            </View>

                        )}
                    </View>
                </ScrollView>
            // </ImageBackground>

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