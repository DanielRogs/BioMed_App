import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function PreHome({ navigation }) {
    return(
        <View style={style.container}>
            <View style={{marginLeft: -80, marginTop: -600}}>
                <Text style={{fontFamily:'ballob', fontSize: 58, marginBottom: -40}}>Bem Vindo</Text>
                <Text style={{fontFamily:'ballosb', fontSize: 20, color:'#11D876', marginLeft: 4}}>Acompanhe a saúde de sua criança</Text>
            </View>
            <View>

            </View>
        </View>
        
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#fffafa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    
})