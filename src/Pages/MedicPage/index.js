import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Awesome from '@expo/vector-icons/FontAwesome'
import Ad from '@expo/vector-icons/AntDesign';

import BarNavigate from "../../Components/barNavigate";

export default function MedicPage({ navigation }) {
    return(
        <View style={style.container}>
            <View>
                <View>
                    <Image source={require('../../assets/Images/MedicoPerfil.jpg')} style={style.imagem}/>
                </View>
                <View style={style.linha} />
                <View style={style.grupoTexto1}>
                    <>
                        <Text style={style.texto1}>Seu Médico:</Text>
                    </>
                    <>
                        <Image source={require('../../assets/Images/Ellipse2.png')} style={style.image2}/>
                        <Awesome name={'stethoscope'} color={'#fff'} size={80} style={style.posicao1}/>
                    </>
                </View>
                <View style={style.medico}>
                        <Ad name={'user'} color={'#11D876'} size={50}/>
                        <Text style={style.nome}>Henrique de Alcântra</Text>
                </View>
                <View style={style.linha2} />
                <View style={style.titulos}>
                    <Text style={style.nome2}>Você marcou:</Text>
                    <Text style={style.nome3}><Text style={{color: "#11D876"}}>Consulta</Text> às {'\n'}<Text style={{color: "#11D876"}}>29/05/2023</Text></Text>
                    <View>
                        <Text style={style.nome4}>Ganho:</Text>
                        <View style={style.coins}>
                            <Image source={require('../../assets/Images/IconeMoeda.png')} style={style.icone}/>
                            <Text style={style.nome5}>20 Coins</Text>
                        </View>
                    </View>
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

    imagem: {
        height: 300,
        width: 400,
        bottom: hp('-5.2%'),
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

    image2: {
        height: 150,
        width: 150,
        left: wp('20%'),
        bottom: hp('3%'),
    },

    posicao: {
        bottom: hp('10%'),
    },

    medico:{
        flexDirection: "row",
        bottom: hp('16.5%'),
        justifyContent: 'center',
        alignItems: 'center'

    },

    nome:{
        fontFamily:'ballosb',
        fontSize: 23,
        marginBottom: hp('-2%'),
        marginLeft: wp('7%')
    },

    titulos:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    linha2: {
        width: 400,
        height: 30,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        bottom: hp('16%'),
        backgroundColor: '#11D876',
    },

    nome2:{
        fontFamily:'ballosb',
        fontSize: 25,
        bottom: hp('14.5%'),
    },

    nome3:{
        fontFamily:'ballosb',
        fontSize: 20,
        bottom: hp('15.5%'),
        left: wp('2%')
    },

    nome4:{
        fontFamily:'ballosb',
        fontSize: 30,
        bottom: hp('13.5%'),
        left: wp('4%')
    },

    coins:{
        flexDirection: "row",
        bottom: hp('13.5%'),
        justifyContent: 'center',
        alignItems: 'center'
    },

    icone:{
        width: wp('5%'),
        height: hp('2.4%'),
        marginRight: wp('4%')
    },

    nome5:{
        fontFamily:'ballosb',
        fontSize: 23,
        color: '#11D876',
        marginBottom: hp('-1.5%')
    },

    posicao1: {
        bottom: hp('-1.5%'),
        right: wp('6.5%'),
    },

})