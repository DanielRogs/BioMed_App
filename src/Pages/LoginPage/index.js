import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import PressableG from "../../Components/greenPressable";
import InputLogECad from "../../Components/inputsCadELogin";

import Feat from '@expo/vector-icons/Feather';

export default function LoginPage({ navigation }) {
    return(
        <View style={style.container}>
            <View>
                <Pressable onPress={() => navigation.navigate('PreHome')}>
                    <Feat name="arrow-left" size={40} color={"#11D876"}/>
                </Pressable>
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
            <View style={style.flexD}>
                <Text style={style.text1}>Não possui conta?</Text>
                <View style={{marginTop: '50%', marginLeft: 75}}/>
                <Pressable onPress={() => navigation.navigate('CadPage')}>
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
    },

    flexD:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title:{
        fontFamily:'ballob',
        fontSize: 58,
        marginBottom: '20%',
        marginLeft: '-35%'
    },

    button:{
        marginTop: 30,
    },

    espacamento:{
        marginBottom: '10%',
        marginTop: 10
    }
})