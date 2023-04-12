import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function whitePressable(props, { navigation }){
    return(
        <View>
            <Pressable style={({pressed}) => [{elevation: pressed ? 3 : 10,}, style.buttonFormat,]} onPress={props.onPress}>
                        <Text style={style.text}>{props.text}</Text>
            </Pressable>
        </View> 
    )
}

const style = StyleSheet.create({

    buttonFormat:{
        backgroundColor: "#ffffff",
        width:258,
        height:55,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2
    },

    text:{
        color: '#1AB8F7',
        fontFamily:'reemr',
        fontSize:25,
    }
})