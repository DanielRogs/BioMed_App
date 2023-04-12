import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import PressableG from "../../Components/greenPressable";
import InputLogECad from "../../Components/inputsCadELogin";

import Feat from '@expo/vector-icons/Feather';

export default function LoginPage({ navigation }) {
    return(
        <View style={style.container}>
            <View style={style.flexD}>
                <Pressable onPress={() => navigation.navigate('PreHome')}>
                    <Feat name="arrow-left" size={40} color={"#11D876"} style={style.positionseta}/>
                </Pressable>
                <Image source={require('../../assets/Images/Capa_login.png')} style={style.img}/>
            </View>
            <View>
                <Text style={style.title}>Login</Text>
            </View>
            <View style={style.espacamento}>
                <InputLogECad adname='user' size={30} color='#11D876' text='Código da criança'/>
                <View style={{marginTop: 25}}/>
                <InputLogECad mciname='lock-outline' size={30} color='#11D876' text='Senha' secure={true}/>
            </View>
            <View style={style.button}>
                <PressableG text='Acessar'/>
            </View>
            <View style={style.flexD1}>
                <Text style={style.text1}>Não possui conta?</Text>
                <View style={{marginTop: '50%', marginLeft: 75}}/>
                <Pressable onPress={() => navigation.navigate('CadPage1')}>
                    <Text style={style.text2}>Cadastre-se</Text>
                </Pressable>
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

    text1:{
        fontFamily: 'reemr',
        color: '#11D876',
    },

    text2: {
        fontFamily: 'reemr',
        color: '#1AB8F7',
        textDecorationLine: 'underline'
    },

    flexD:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    flexD1:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        top: hp('10%')
    },

    title:{
        fontFamily:'ballob',
        fontSize: 58,
        marginBottom: hp('5%'),
        marginLeft: wp('-35%')
    },

    button:{
        marginTop: hp('8%'),
    },

    espacamento:{
        marginBottom: hp('5%'),
        marginTop: wp('3%')
    },

    img:{
        left: wp('0%'),
        top: hp('-2.1%'),
        width: wp('90%'),
        height: hp('19%')
    },

    positionseta:{
        left: wp('5%')
    }
})