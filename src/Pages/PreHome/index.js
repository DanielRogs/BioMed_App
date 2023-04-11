import React from "react";
import { View, Text, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import PressableB from "../../Components/bluePressable";
import PressableW from "../../Components/whitePressable";

export default function PreHome({ navigation }) {
    return(

        <View style={style.container}>
            <View style={style.principal}>
                <Text style={{fontFamily:'ballob', fontSize: 58, marginBottom: -40}}>Bem Vindo</Text>
                <Text style={{fontFamily:'ballosb', fontSize: 20, color:'#11D876', marginLeft: 4}}>Acompanhe a saúde de sua criança</Text>
            </View>

            <View style={style.espacamento}>
                <PressableB text="Entrar" onPress={() => navigation.navigate("LoginPage")}></PressableB>
                <View style={style.espacamentoBotao}/>
                <PressableW text="Cadastrar-se" onPress={() => navigation.navigate("CadPage")}></PressableW>
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

    espacamento:{
        marginBottom: wp('-10%')
    },

    espacamentoBotao:{
        marginBottom: hp('10%')
    }
    
})