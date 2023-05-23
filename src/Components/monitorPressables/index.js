import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Awesome from '@expo/vector-icons/FontAwesome';
import Material from '@expo/vector-icons/MaterialCommunityIcons';
import Awesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function monitorPressable(props){

    const navigation = useNavigation();

    return(
        <View>
            <Pressable style={({pressed}) => [{elevation: pressed ? 3 : 10,}, style.buttonFormat,]} onPress={() => navigation.navigate(props.Navigate)}>
                <View style={style.geral}>
                    <View style={style.simbol}>
                        <Awesome name={props.simbolAw} color={'#ffffff'} size={55}/>
                        <Material name={props.simbolMa} color={'#ffffff'} size={55}/>
                        <Awesome5 name={props.simbolAw5} color={'#ffffff'} size={55}/>
                        <Ionicons name={props.simbolIo} color={'#ffffff'} size={55}/>
                    </View>
                    <View style={style.line}>
                        <Text style={style.text}>{props.text}</Text>
                    </View>
                </View>
            </Pressable>
        </View> 
    )
}

const style = StyleSheet.create({

    geral:{
        alignItems: "center",
        flexDirection: "row",
    },

    simbol: {
        flexDirection: "row",
        flex: 1,
        marginLeft: 20,
        marginTop: 15
    },

    line:{
        flex: 2
    },
    
    buttonFormat:{
        backgroundColor: "#1AB8F7",
        width:308,
        height:90,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2
    },
    
    text:{
        color: 'white',
        fontFamily:'reemr',
        fontSize:30,
    }
})