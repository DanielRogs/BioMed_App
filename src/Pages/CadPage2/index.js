import React from "react";
import { StyleSheet,View,Text,Pressable,Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Feat from '@expo/vector-icons/Feather';

import InputLogECad from "../../Components/inputsCadELogin";
import PressableG from "../../Components/greenPressable";

export default function CadPage2({ navigation }) {
    return(
        <View style={style.container}>
            <View>
                <Pressable onPress={() => navigation.navigate('CadPage1')}>
                    <Feat name="arrow-left" size={40} color={"#11D876"} style={style.positionseta}/>
                </Pressable>
                <Image source={require("../../assets/Images/CapaCad_cima.png")} style={style.img}/>
            </View>
            <View style={style.posicao}>
                <Text style={style.title}>Criar</Text>
                <Text style={style.title2}>Conta</Text>
            </View>
            <View style={style.espacamento}>
                <InputLogECad adname='user' size={30} color='#11D876' text='Nome Completo da Criança'/>
                <View style={{marginTop: 25}}/>
                <InputLogECad mciname='calendar' size={30} color='#11D876' text='Data de nascimento'/>
            </View>
            <View style={style.espacamento2}>
                <PressableG text='Cadastrar-se' page='LoginPage'/>
            </View>
            <View>
                <Image source={require("../../assets/Images/CapaCad2_baixo.png")} style={style.img2}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        backgroundColor:'#FFFAFA',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    positionseta:{
        left: wp('2%'),
        top: hp('-21%'),
    },

    img:{
        left: wp('20%'),
        top: hp('-36%'),
        width: wp('90%'),
        height: hp('45%')
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
        bottom: hp('63%'),
    },
    
    espacamento:{
        position: "relative",
        zIndex: 1,
        marginTop: hp('-55%'),
    },

    espacamento2:{
        position: "relative",
        zIndex: 1,
        marginTop: hp('5%'),
    },

    img2: {
        position: "relative",
        zIndex:-1,
        left: wp('-5%'),
        top: hp('40%'),
        width: wp('90%'),
        height: hp('45%'),
        marginTop: hp('-45%'),
    }
})