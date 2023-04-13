import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function MonitorPage() {
    return(
        <View style={style.container}>
            <Text>MonitorPage</Text>
        </View>
    )
}

const style = StyleSheet.create({

    container:{
        backgroundColor:'#FFFAFA',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})