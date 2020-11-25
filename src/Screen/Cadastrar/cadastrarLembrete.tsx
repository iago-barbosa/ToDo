import React, { useState } from 'react';
import {  View, Text, TextInput, TouchableOpacity} from 'react-native';
import Default from '../../Styles/Default';
import CadastrarLembreteStyle from '../../Styles/CadastrarLembreteCSS';
import api from '../../Service/api.js';
 
export default function CadastrarLembrete ({navigation}:any) {

    const [titulo, setTitulo] = useState('');
    const [sobre, setSobre] = useState('');

    function cadastraLembrete(){
        var currentDate = new Date();
        api.post('/cadastrarLembrete', 
            {
                titulo: titulo,
                texto: sobre,
                dataCriacao: currentDate,
                status: "1"
            }).then((res:any) => {
                navigation.navigate('Home')
        })
    }

    return(
        <View style={CadastrarLembreteStyle.main}>
            <View style={CadastrarLembreteStyle.container}>
                <View style={CadastrarLembreteStyle.inputItem}>
                    <Text style={CadastrarLembreteStyle.text}>Titulo do Lembrete:</Text>
                    <TextInput
                        style={CadastrarLembreteStyle.input}
                        placeholderTextColor = "#fff"
                        placeholder="Titulo"
                        value={titulo}
                        onChangeText={(text) => setTitulo(text)}
                    ></TextInput>
                </View>

                <View style={CadastrarLembreteStyle.inputItem}>
                    <Text style={CadastrarLembreteStyle.text}>Conteudo do lembrete:</Text>
                    <TextInput
                        placeholder="Conteudo"
                        multiline={true}
                        placeholderTextColor = "#fff"
                        value={sobre}
                        style={[CadastrarLembreteStyle.input, {height: Math.max(35, 95)}]}
                        onChangeText={(text) => setSobre(text)}
                    ></TextInput>
                </View>

                <TouchableOpacity style={CadastrarLembreteStyle.button} onPress={cadastraLembrete}>
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}