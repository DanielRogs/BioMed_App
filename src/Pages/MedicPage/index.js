import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Awesome from '@expo/vector-icons/FontAwesome'
import Ad from '@expo/vector-icons/AntDesign';

import BarNavigate from "../../Components/barNavigate";
import { LinearGradient } from "expo-linear-gradient";

export default function MedicPage({ navigation }) {
    return(
     
        <View style={style.container}>

            <View>
                <View>
                    <Image source={require('../../assets/Images/MedicoPerfil.jpg')} style={style.imagem}/>
                </View>

                <View style={style.linha}></View>
                
                <View style={style.grupoTexto1}>
                    <>
                        <Text style={style.texto1}>Seu Médico:</Text>
                    </>
                    <>
                        <Image source={require('../../assets/Images/Ellipse2.png')} style={style.image2}/>
                        <Awesome name={'stethoscope'} color={'#fff'} size={80} style={style.posicao1}/>
                    </>
                </View>

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

    linha: {
        width: 400,
        height: 10,
        bottom: hp('-5%'),
        backgroundColor: '#11D876',
    },

    grupoTexto1: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',

    },

    texto1: {
        fontFamily: 'ballosb',
        fontSize: 30,
        bottom: hp('-10%'),
        left: wp('9%'),
    },

    imagem: {
        height: 300,
        width: 400,
        bottom: hp('-5.2%'),
    },

    image2: {
        height: 150,
        width: 150,
        left: wp('20%'),
        bottom: hp('3%'),
    },

    posicao: {
        bottom: hp('10%'),
    },

    posicao1: {
        bottom: hp('-1.5%'),
        right: wp('6.5%'),
    },

})