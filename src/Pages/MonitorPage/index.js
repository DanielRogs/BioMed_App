import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import PressableMon from "../../Components/monitorPressables";
import BarNavigate from "../../Components/barNavigate";

export default function MonitorPage() {
    return(
            <View style={style.container}>
                    <PressableMon text="Consultas" simbolAw="stethoscope"></PressableMon>
                    <View style={style.espacamento}/>
                    <PressableMon text="Quimioterapias" simbolMa="sine-wave"></PressableMon>
                    <View style={style.espacamento}/>
                    <PressableMon text="Radioterapias" simbolAw5="x-ray"></PressableMon>
                    <View style={style.espacamento}/>
                    <PressableMon text="Sangue" simbolIo="ios-water-outline"></PressableMon>

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

    espacamento: {
        marginBottom: 35
    },
    

    posicao: {
        bottom: hp('-15%'),
    },
})