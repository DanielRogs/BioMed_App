import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Ionicons from '@expo/vector-icons/Ionicons';
import MCI from '@expo/vector-icons/MaterialCommunityIcons';
import Awesome from '@expo/vector-icons/FontAwesome';

import BarNavigate from "../../Components/barNavigate";
import { LinearGradient } from "expo-linear-gradient";

import Grafico from "../../Components/Grafico"

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
                <Image source={require('../../assets/Images/Background_HomePage.png')} style={style.background}/><Image source={require('../../assets/Images/Background_HomePage.png')} style={style.background}/>
            </View>
            <View style={style.flexD3}>
                <LinearGradient
                colors={['#00FFC2', '#11D876']}
                start={[ 0.5, 0.2 ]}
                style={style.canto}>
                    <Awesome name="child" color={'white'} size={70} style={{ bottom: hp('0.3%')}}/>
                </LinearGradient>
                <View style={style.flexD2}>
                    <Text style={style.nome}>Pedro Henrique Queiroz</Text>
                    <Text style={style.nome2}>235 Coins</Text>
                </View>
            </View>
            <View>
                <Text style={style.nome3}>Estatística da Criança</Text>
            </View>
            <View style={style.grafico}>
                <Grafico />
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

    canto: {
        borderRadius: 100,
        width: wp('20%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15
    },

    flexD1:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        top: hp('-33%'),
    },

    flexD2:{
        alignItems: 'center',
        marginLeft: wp('5%'),
        marginTop: hp('1.5%')
    },

    flexD3:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: hp('-27%')
    },

    background: {
        position: 'absolute',
        zIndex: 0,
        width: wp('100%'),
        height: hp('70%'),
        top: hp('-5%'),
    },

    nome: {
        fontFamily: 'ballob',
        fontSize: 25
    },

    nome2: {
        fontFamily: 'ballob',
        fontSize: 15,
        color: '#11D876',
        bottom: hp('1%')
    },

    nome3: {
        fontFamily: 'ballosb',
        fontSize: 20,
        bottom: hp('20.5%')
    },

    posicao: {
        bottom: hp('-33%'),
    },

    grafico: {
        position: "absolute",
        zIndex: 2
    }
})
