import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Ionicons from '@expo/vector-icons/Ionicons';
import BarNavigate from "../../Components/barNavigate";

import BoxData from '../../Components/dadosPressable'

export default function Sangue() {
    return(
        <View style={style.container}>
            <View>
                <Image source={require('../../assets/Images/Capa2_Monitoramentos.png')} style={style.img2}/>
                <Image source={require('../../assets/Images/Capa1_Monitoramentos.png')} style={style.img}/>
                <Text style={style.title}>Sangue</Text>
                <Ionicons name={'ios-water-outline'} color={'#11D876'} size={200} style={style.posicao1}/>
            </View>
            <View>
                <BoxData data='10/04/2023' situacao='Coletado' color='#00FFC2'/>
                <BoxData data='06/03/2023' situacao='Falta'/>
                <BoxData data='12/02/2023' situacao='Falta'/>
                <BoxData data='20/01/2023' situacao='Coletado' color='#00FFC2'/>
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

    title:{
        position: "absolute",
        zIndex: 3,
        color: 'white',
        fontFamily: 'ballob',
        fontSize: 50,
        bottom: hp('12%'),
        left: wp('-10%')
    },

    posicao: {
        bottom: hp('-9%'),
    },

    posicao1: {
        bottom: hp('40%'),
        left: wp('40%'),
        marginBottom: hp('-35%'),
        transform: [{ rotate: '-15deg' }]
    },

    img:{
        left: wp('-20%'),
        top: hp('-15%'),
        width: wp('60%'),
        height: hp('25%'),
        zIndex:2
    },

    img2:{
        position: "absolute",
        left: wp('-21%'),
        top: hp('-15.1%'),
        width: wp('65%'),
        height: hp('26%'),
        zIndex:1
    },
})