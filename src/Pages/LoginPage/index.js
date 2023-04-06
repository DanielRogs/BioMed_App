import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PressableG from "../../Components/greenPressable";
import InputLogECad from "../../Components/inputsCadELogin";

export default function LoginPage() {
    return(
        <View style={style.container}>
            <View>

            </View>
            <View>
                <Text style={style.title}>Login</Text>
            </View>
            <View style={style.espacamento}>
                <InputLogECad adname='user' size={30} color='#00ffc2' text='Código da criança'/>
                <View style={{marginTop: 25}}/>
                <InputLogECad mciname='lock-outline' size={30} color='#00ffc2' text='Senha' secure={true}/>
            </View>
            <View style={style.button}>
                <PressableG text='Acessar'/>
            </View>
            <View style={style.flexD}>
                <Text style={style.text}>Não possui conta?</Text>
                <View style={{marginTop: '50%', marginLeft: 75}}/>
                <Text style={style.text}>Cadastre-se</Text>
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

    text:{
        fontFamily: 'reemr'
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