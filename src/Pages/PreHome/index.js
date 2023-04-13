import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import PressableB from "../../Components/bluePressable";
import PressableW from "../../Components/whitePressable";

export default function PreHome({ navigation }) {
    return(

        <View style={style.container}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Image source={require("../../assets/Images/Capa_PreHome.png")} style={style.background}/>
                <Image source={require("../../assets/Images/MeninaPulando_PreHome.png")} style={style.background2}/>
            </View>
            <View style={style.principal}>
                <Text style={{fontFamily:'ballob', fontSize: 58, marginBottom: -40}}>Bem Vindo</Text>
                <Text style={{fontFamily:'ballosb', fontSize: 20, color:'#11D876', marginLeft: 4}}>Acompanhe a saúde de sua criança</Text>
            </View>

            <View style={style.espacamento}>
                <PressableB text="Entrar" onPress={() => navigation.navigate("LoginPage")}></PressableB>
                <View style={style.espacamentoBotao}/>
                <PressableW text="Cadastrar-se" onPress={() => navigation.navigate("CadPage1")}></PressableW>
            </View>
        </View>
        
    )
}

const style = StyleSheet.create({

    principal: {
        marginBottom: wp('100%'),
        marginLeft: hp('-8%')
    },

    container:{
        backgroundColor: '#fffafa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    background: {
        position: "absolute",
        zIndex: 0,
        width: wp("100%"),
        height: hp("70%"),
        top: hp("25%"),
    },

    background2: {
        position: "absolute",
        zIndex: 0,
        width: wp("70%"),
        height: hp("35%"),
        top: hp("22%"),
        left: wp("-19%")
    },

    espacamento:{
        marginBottom: wp('-10%')
    },

    espacamentoBotao:{
        marginBottom: hp('9%')
    },
    
})