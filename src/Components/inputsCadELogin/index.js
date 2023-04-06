import React from "react";
import Ad from '@expo/vector-icons/AntDesign';
import Mci from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, TextInput, View, Text } from "react-native";

export default function inputsCadELogin(props) {
    return(
        <View>
            <Text style={style.text}>{props.text}</Text>
            <View style={style.container}>
                <Ad name={props.adname} size={props.size} color={props.color}/>
                <Mci name={props.mciname} size={props.size} color={props.color}/>
                <TextInput style={style.input} secureTextEntry={props.secure}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    container:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    input:{
        backgroundColor: 'white',
        marginLeft: 5,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'reemr',
        width: 225,
        height: 45,
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 5},
        shadowOpacity: 1,
        shadowRadius: 2
    },

    text:{
        color: 'blue',
        marginLeft: 40,
        marginBottom: 5,
        fontFamily:'reemr'
    }
})