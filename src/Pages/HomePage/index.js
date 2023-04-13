import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Ionicons from '@expo/vector-icons/Ionicons';
import MCI from '@expo/vector-icons/MaterialCommunityIcons';

import BarNavigate from "../../Components/barNavigate";

export default function HomePage({ navigation }) {
    return(
        <View style={style.container}>
            <View style={style.flexD1}>
                <Pressable onPress={() => navigation.navigate('PreHome')}>
                    <Ionicons name='exit-outline' size={40} color={"#11D876"} style={{marginRight: wp('65%')}}/>
                </Pressable>
                <Pressable>
                    <MCI name='shopping-outline' size={40} color={"#11D876"}/>
                </Pressable>
            </View>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Image source={require('../../assets/Images/Background_HomePage.png')} style={style.background}/>
            </View>
            <View style={style.flexD2}>
                <Image source={require('../../assets/Images/Baby_HomePage.png')} style={style.background2}/>
                <Text style={style.nome}>Pedro Henrique Figueredo</Text>
            </View>
            <View style={style.posicao}>
                <BarNavigate/>
            </View>
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

    flexD1:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        top: hp('-35%'),
    },

    flexD2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: hp('-20%'),
    },

    background: {
        position: 'absolute',
        zIndex: 0,
        width: wp('100%'),
        height: hp('70%'),
        top: hp('-5%'),
    },

    background2: {
        width: wp('20.9%'),
        height: hp('9%'),
        top: hp('-10%'),
        marginRight: wp('5%')
    },

    nome: {
        fontFamily: 'ballob',
        fontSize: 25
    },

    posicao: {
        bottom: hp('-35%'),
    }
})
