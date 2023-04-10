import React from "react";
import { StyleSheet,View,Text,Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Feat from '@expo/vector-icons/Feather';

import InputLogECad from "../../Components/inputsCadELogin";
import MiniGreenPressable from "../../Components/MiniGreenPressable";

export default function CadPage({ navigation }) {
    return(
        <View style={style.container}>
            <View>
                <Pressable onPress={() => navigation.navigate('LoginPage')}>
                    <Feat name="arrow-left" size={40} color={"#11D876"} style={style.positionseta}/>
                </Pressable>
            </View>
            <View>
                <Text style={style.title}>Criar{'\n'}Conta</Text>
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
        marginBottom: hp('5%'),
        marginLeft: wp('-35%'),
        lineHeight: hp('13%')
    },

    positionseta:{
        left: wp('-35%')
    },

    espacamento2:{
        marginTop: hp('3%'),
        marginLeft: wp('35%')
    }
})