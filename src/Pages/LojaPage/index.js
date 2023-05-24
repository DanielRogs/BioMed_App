import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Ionicons from '@expo/vector-icons/Ionicons';
import BoxData from '../../Components/dadosPressable'

export default function LojaPage({ navigation }) {
    return(
        <View style={style.container}>
            <View style={style.parteCima}>
                <Pressable onPress={() => navigation.navigate('HomePage')}>
                    <Ionicons name={'arrow-back'} color={'#11D876'} size={50}/>
                </Pressable>
                <Image source={require('../../assets/Images/IconeMoeda.png')} style={style.icone}/>
                <Text style={style.coins}>235 Coins</Text>
            </View>
            <View style={style.container}>
                <Image source={require('../../assets/Images/Background_LojaPage.png')} style={style.back}/>
            </View>
            <View style={style.lojas}>
                <Text style={style.texto}>Selecione o seu prêmio:</Text>
                <BoxData data='Kit doces' situacao='50 coins' ctitle='#11D876' color='#1AB8F7' bcolor='white'/>
                <View style={{marginBottom: 20}}/>
                <BoxData data='Kit cuidados' situacao='100 coins' ctitle='#11D876' color='#1AB8F7' bcolor='white'/>
                <View style={{marginBottom: 20}}/>
                <BoxData data='Kit brinquedos básicos' situacao='120 coins' ctitle='#11D876' color='#1AB8F7' bcolor='white'/>
                <View style={{marginBottom: 20}}/>
                <BoxData data='Desconto em consulta' situacao='180 coins' ctitle='#11D876' color='#1AB8F7' bcolor='white'/>
                <View style={{marginBottom: 20}}/>
                <BoxData data='Desconto em quimioterapia' situacao='250 coins' ctitle='#11D876' color='#1AB8F7' bcolor='white'/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    container:{
        backgroundColor: '#FFFAFA',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    back:{
        position: "absolute",
        zIndex: 1,
        bottom: hp('-7%'),
        width: wp('100%'),
        height: hp('100%')
    },

    parteCima:{
        position: "relative",
        zIndex: 2,
        bottom: hp('-5%'),
        flexDirection: "row",
        alignItems: 'center',
        marginRight: wp('1.5%')
    },

    icone:{
        width: wp('8%'),
        height: hp('3.8%'),
        marginLeft: wp('50%'),
    },

    coins:{
        fontFamily: 'reemr',
        color: '#11D876',
        fontSize: 20,
        marginLeft: wp('3%')
    },

    lojas:{
        position: "absolute",
        zIndex:10,
        top: hp('23%'),
        alignItems: 'center',
    },

    texto:{
        marginTop: hp('-5%'),
        marginBottom: hp('3%'),
        fontSize: 30,
        fontFamily: 'reemr',
        color: 'white',
    }
})