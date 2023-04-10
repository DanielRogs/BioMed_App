import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function greenPressable(props, { navigation }){
    return(
        <View>
            <Pressable style={({pressed}) => [{elevation: pressed ? 3 : 10,}, style.buttonFormat,]}>
                <LinearGradient
                // Button Linear Gradient
                    colors={['#11D876', '#00FFC2']}
                    start={[ 0.1, -1.1 ]}
                    style={style.buttonFormat}>
                        <Text style={style.text}>{props.text}</Text>
                </LinearGradient>
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