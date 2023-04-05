import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PressableG from "../../Components/greenPressable";

export default function LoginPage({ navigation }) {
    return(
        <View style={style.container}>
            <View>

            </View>
            <View>
                <Text style={style.title}>Login</Text>
            </View>
                <PressableG text='Acessar' />
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

    title:{
        fontFamily:'ballob',
        fontSize: 58,
        marginTop: '-60%',
        marginLeft: '-35%'
    }
})