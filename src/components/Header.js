import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Switch, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Icon } from "native-base";
import UserIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default headerComponent = (props) => {
    return (




        <View style={{ height: verticalScale(60), justifyContent: "center", backgroundColor: "#000914", alignItems: "flex-end" }}>
            <UserIcon
                name="map-marker"
                style={{ color: "#cab082", fontSize: verticalScale(30), paddingHorizontal: moderateScale(5) }}
            />

        </View>


    );
}

const styles = StyleSheet.create({

    icon: {
        marginHorizontal: 20,
        marginVertical: 20,
        color: "#9c84ff",
        fontSize: 30
    }

});