import * as React from 'react';
import {  View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Default from '../../Styles/Default';
import CadastrarStyle from '../../Styles/CadastrarCSS';

export default function Cadastrar () {
    return(
        <View style={Default.main}>
            <View style={Default.container}>
                <Text>cadstrar tarefas</Text>
            </View>
        </View>
    );
}