import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Awesome5 from '@expo/vector-icons/FontAwesome5';

import BarNavigate from "../../Components/barNavigate";
import BoxData from '../../Components/dadosPressable'

export default function Radioterapia() {
    return(
        <View style={style.container}>
            <View>
                <Image source={require('../../assets/Images/Capa2_Monitoramentos.png')} style={style.img2}/>
                <Image source={require('../../assets/Images/Capa1_Monitoramentos.png')} style={style.img}/>
                <Text style={style.title}>Radioterapia</Text>
                <Awesome5 name={'x-ray'} color={'#11D876'} size={150} style={style.posicao1}/>
            </View>
            <View>
                <BoxData data='10/04/2023' situacao='Realizado' ctitle='white' color='#00FFC2' bcolor='#1AB8F7'/>
                <BoxData data='06/03/2023' situacao='Realizado' ctitle='white' color='#00FFC2' bcolor='#1AB8F7'/>
                <BoxData data='12/02/2023' situacao='Falta' ctitle='white' bcolor='#1AB8F7'/>
                <BoxData data='20/01/2023' situacao='Realizado' ctitle='white' color='#00FFC2' bcolor='#1AB8F7'/>
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

    posicao: {
        bottom: hp('-8%'),
    },

    posicao1: {
        bottom: hp('37%'),
        left: wp('46%'),
        marginBottom: hp('-27.5%'),
        transform: [{ rotate: '-5deg' }]
    },

    img:{
        left: wp('-20%'),
        top: hp('-14%'),
        width: wp('60%'),
        height: hp('25%'),
        zIndex:2
    },

    img2:{
        position: "absolute",
        left: wp('-21%'),
        top: hp('-14.2%'),
        width: wp('65%'),
        height: hp('26%'),
        zIndex:1
    },

    title:{
        position: "absolute",
        zIndex: 3,
        color: 'white',
        fontFamily: 'ballob',
        fontSize: 40,
        bottom: hp('14%'),
        left: wp('-15%')
    },
})