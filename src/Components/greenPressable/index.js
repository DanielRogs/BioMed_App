import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function greenPressable(props){
    return(
        <View>
            <Pressable style={style.buttonFormat}>
                <Text style={style.text}>{props.text}</Text>
            </Pressable>
        </View>  
    )
}

const style = StyleSheet.create({

    buttonFormat:{
        width:258,
        height:55,
        backgroundColor: '#00ffc2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#00ffb2',
        shadowOffset: { width: 10, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2
    },

    text:{
        color: 'white',
        fontFamily:'reemr',
        fontSize:25,
    }
})