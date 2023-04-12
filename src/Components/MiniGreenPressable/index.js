import React from "react";
import { StyleSheet,View,Pressable,Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Ad from '@expo/vector-icons/AntDesign';

export default function MiniGreenPressable(props, { navigation }){
    return(
        <View>
            <Pressable style={({pressed}) => [{elevation: pressed ? 3 : 10,}, style.buttonFormat,]} onPress={() => navigation.navigate('CadPage2')}>
                <LinearGradient
                // Button Linear Gradient
                    colors={['#11D876', '#00FFC2']}
                    start={[ 0.1, -1.1 ]}
                    style={style.buttonFormat}>
                        <Text style={style.text}>{props.text}</Text>
                        <View style={{marginLeft:20}}/>
                        <Ad name='arrowright' color={'white'} size={20}/>
                </LinearGradient>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({

    buttonFormat:{
        width:135,
        height:35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
        flexDirection: "row",
    },

    text:{
        color: 'white',
        fontFamily:'reemr',
        fontSize: 20,
    }
})