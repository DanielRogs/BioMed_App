import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Feat from '@expo/vector-icons/Feather';
import Awesome from '@expo/vector-icons/FontAwesome';

export default function barNavigate(props){

    const navigation = useNavigation();

    return(
        <View style={style.content}>
            <View style={style.ladoEsq}>
                <Feat name="clipboard" color={'#11D876'} size={40} style={{ right: wp('1.5%')}}/>
            </View>
            <View>
                <LinearGradient
                // Button Linear Gradient
                colors={['#00FFC2', '#11D876']}
                start={[ 0.5, 0.2 ]}
                style={style.meio}>
                    <Awesome name="heartbeat" color={'#ffffff'} size={55} style={{ top: hp('0.2%')}}/>
                </LinearGradient>
            </View>
            <View style={style.ladoDir}>
                <Awesome name="stethoscope" color={'#11D876'} size={45} style={{ left: wp('1.5%')}}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    content: {
        flexDirection: "row",
        alignItems: 'center',
    },

    ladoEsq:{
        position: 'relative',
        zIndex:0,
        backgroundColor: 'white',
        borderRadius: 15,
        width: wp('22%'),
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center'
    },

    meio: {
        position: 'relative',
        zIndex:1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('20%'),
        height: hp('10%'),
        marginLeft: wp('-5%'),
        marginRight: wp('-5%'),
    },

    ladoDir: {
        position: 'relative',
        zIndex:-1,
        backgroundColor: 'white',
        borderRadius: 15,
        width: wp('22%'),
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
})