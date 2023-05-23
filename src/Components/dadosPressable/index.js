import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function dadosPressable(props){
    return(
        <View style={style.container}>
            <Pressable style={style.buttonFormat}>
                <View style={style.geral}>
                    <Text style={style.data}>{props.data}</Text>
                    <Text style={[style.text, {color: props.color }]}>{props.situacao}</Text>
                </View>
            </Pressable>
        </View> 
    )
}

const style = StyleSheet.create({

    container:{
        marginTop: hp('2%')
    },

    geral:{
        alignItems: "center",
    },

    line:{
        flex: 2
    },
    
    buttonFormat:{
        backgroundColor: "#1AB8F7",
        width: wp('75%'),
        height: hp('11%'),
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: { width: 10, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2
    },

    data:{
        color: 'white',
        fontFamily:'reemr',
        fontSize:25,
        marginBottom: hp('0.5%')
    },
    
    text:{
        fontFamily:'reemr',
        fontSize:25,
    }
})