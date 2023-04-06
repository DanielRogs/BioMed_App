import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function greenPressable(props, { navigation }){
    return(
        <View>
            <Pressable style={({pressed}) => [{elevation: pressed ? 3 : 10,}, style.buttonFormat,]}>
                <Text style={style.text}>{props.text}</Text>
            </Pressable>
        </View> 
         
    )
}

const style = StyleSheet.create({

    buttonFormat:{
        width:258,
        height:55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ffc2',
        shadowColor: '#000000',
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