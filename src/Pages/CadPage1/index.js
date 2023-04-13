import React from "react";
import { StyleSheet,View,Text,Pressable,Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Feat from '@expo/vector-icons/Feather';

import InputLogECad from "../../Components/inputsCadELogin";
import MiniGreenPressable from "../../Components/MiniGreenPressable";

export default function CadPage1({ navigation }) {
    return(
        <View style={style.container}>
            <View>
                <Pressable onPress={() => navigation.navigate('PreHome')}>
                    <Feat name="arrow-left" size={40} color={"#11D876"} style={style.positionseta}/>
                </Pressable>
                <Image source={require("../../assets/Images/CapaCad_cima.png")} style={style.img}/>
            </View>
            <View style={style.posicao}>
                <Text style={style.title}>Criar</Text>
                <Text style={style.title2}>Conta</Text>
            </View>
            <View style={style.espacamento}>
                <InputLogECad adname='user' size={30} color='#11D876' text='Nome Completo do Responsável'/>
                <View style={{marginTop: 25}}/>
                <InputLogECad mciname='email-outline' size={30} color='#11D876' text='Email do Responsável'/>
                <View style={{marginTop: 25}}/>
                <InputLogECad mciname='lock-outline' size={30} color='#11D876' text='Criar Senha' secure={true}/>
                <View style={{marginTop: 25}}/>
                <InputLogECad mciname='lock-open-outline' size={30} color='#11D876' text='Confirmar Senha' secure={true}/>
            </View>
            <View style={style.espacamento2}>
                <MiniGreenPressable text='Avançar'/>
            </View>
            <View>
                <Image source={require("../../assets/Images/MeninoRaquete_Cad.png")} style={style.img3}/>
                <Image source={require("../../assets/Images/CapaCad_baixo.png")} style={style.img2}/>
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

    title:{
        fontFamily:'ballob',
        fontSize: 58,
    },

    title2:{
        fontFamily:'ballob',
        fontSize: 58,
        marginTop: hp('-5%')
    },

    posicao:{
        marginLeft: wp('-33%'),
        bottom: hp('53%'),
    },

    positionseta:{
        left: wp('2%'),
        top: hp('-10%'),
    },

    espacamento:{
        position: "relative",
        zIndex: 1,
        marginTop: hp('-53%'),
    },

    espacamento2:{
        position: "relative",
        zIndex: 1,
        marginTop: hp('4%'),
        marginLeft: wp('35%'),
    },

    img:{
        left: wp('20%'),
        top: hp('-26%'),
        width: wp('90%'),
        height: hp('45%')
    },

    img2:{
        position: "relative",
        zIndex:-1,
        left: wp('7%'),
        top: hp('34%'),
        width: wp('90%'),
        height: hp('45%'),
        marginTop: hp('-45%'),
    },

    img3:{
        position: "relative",
        zIndex: 1,
        left: wp('-12%'),
        top: hp('41.5%'),
        width: wp('93%'),
        height: hp('44%'),
        marginTop: hp('-45%'),
    }
})