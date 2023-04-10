import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function HomePage() {
    return(
        <View style={style.container}>
            <Text>HomePage</Text>
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
