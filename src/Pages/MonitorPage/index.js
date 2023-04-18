import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from "expo-linear-gradient";

import PressableMon from "../../Components/monitorPressables";
import BarNavigate from "../../Components/barNavigate";
import Awesome from '@expo/vector-icons/FontAwesome';


export default function MonitorPage() {
    return(
            <View style={style.container}>

                    <View style={style.flexD3}>
                         <LinearGradient
                            colors={['#00FFC2', '#11D876']}
                            start={[ 0.5, 0.2 ]}
                            style={style.canto}>
                                <Awesome name="child" color={'white'} size={23} style={{ bottom: hp('0.3%')}}/>
                            </LinearGradient>
                            <View style={style.flexD2}>
                                <Text style={style.nome}>Pedro Henrique Quiroz</Text>
                            </View>
                    </View>

                    <View style={style.descZone}>
                        <Text style={style.descricao}>O que você deseja</Text>
                        <Text style={style.descricao}>monitorar?</Text>
                    </View>

                    <View style={style.buttonsZone}>
                        <PressableMon text="Consultas" simbolAw="stethoscope"></PressableMon>
                        <View style={style.espacamento}/>
                        <PressableMon text="Quimioterapias" simbolMa="sine-wave"></PressableMon>
                        <View style={style.espacamento}/>
                        <PressableMon text="Radioterapias" simbolAw5="x-ray"></PressableMon>
                        <View style={style.espacamento}/>
                        <PressableMon text="Sangue" simbolIo="ios-water-outline"></PressableMon>
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

    canto: {
        borderRadius: 100,
        width: wp('8%'),
        height: hp('3.5%'),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15
    },

    flexD2:{
        marginLeft: 15,
    },

    flexD3:{
        top: hp("-1%"),
        flexDirection: "row",
    },

    descZone: {
        alignItems: "center",
        marginTop: 30
    },

    buttonsZone: {
        marginTop: 40,
    },

    nome: {
        fontFamily: 'ballob',
        fontSize: 20
    },

    descricao: {
        marginBottom: -20,
        fontFamily: 'ballob',
        fontSize: 30
    },

    espacamento: {
        marginBottom: 35
    },
    

    posicao: {
        bottom: hp('-4%'),
    },
})