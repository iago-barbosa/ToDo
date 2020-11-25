import * as React from 'react';
import {  View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Default from '../../Styles/Default';
import CadastrarStyle from '../../Styles/CadastrarCSS';

export default function Cadastrar ({ navigation}: any) {
    return(
        <View style={[Default.main, CadastrarStyle.main]}>
            <TouchableOpacity style={CadastrarStyle.button} onPress={() => navigation.navigate('CadastrarLembrete')}>
                <Text style={CadastrarStyle.text}>Adicionar Lembrete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={CadastrarStyle.button} onPress={() => navigation.navigate('Tarefas')}>
                <Text style={CadastrarStyle.text}>Adicionar Tarefa</Text>
            </TouchableOpacity>
        </View>
    );
}