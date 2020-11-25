import React, { useState } from 'react';
import {  View, Text, TextInput, TouchableOpacity} from 'react-native';
import Default from '../../Styles/Default';
import CadastrarLembreteStyle from '../../Styles/CadastrarLembreteCSS';
import DatePicker from 'react-native-datepicker';
import api from '../../Service/api.js';

export default function CadastrarTarefa ({navigation}:any) {

    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [sobre, setSobre] = useState('');
    var current_date = new Date();

    function cadastraTarefa(){
        console.log('aqui');
        api.post('/cadastratarefas', 
            {
                titulo: titulo,
                texto: sobre,
                dataCriacao: current_date,
                dataEntrega: data,
                status: "1"
            }).then((res:any) => {
                navigation.navigate('Home')
        })
    }
 
    return(
        <View style={CadastrarLembreteStyle.main}>
            <View style={CadastrarLembreteStyle.container}>
                <View style={CadastrarLembreteStyle.inputItem}>
                    <Text style={CadastrarLembreteStyle.text}>Titulo da Tarefa:</Text>
                    <TextInput
                        style={CadastrarLembreteStyle.input}
                        placeholderTextColor = "#fff"
                        placeholder="Titulo"
                        value={titulo}
                        onChangeText={(text) => setTitulo(text)}
                    ></TextInput>
                </View>

                <View style={CadastrarLembreteStyle.inputItem}>
                    <Text style={CadastrarLembreteStyle.text}>Prazo:</Text>
                    <DatePicker 
                            format="YYYY-MM-DD"
                            style={CadastrarLembreteStyle.inputDate}
                            mode="date"
                            placeholder="select date"
                            minDate={current_date}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            date={data}
                            customStyles={{
                                dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 4,
                                  marginLeft: 0
                                },
                                dateInput: {
                                    backgroundColor: '#fff'
                                }
                            }}
                            onDateChange={(date) => {setData(date)}}
                        />
                </View>

                <View style={CadastrarLembreteStyle.inputItem}>
                    <Text style={CadastrarLembreteStyle.text}>Conteudo da tarefa:</Text>
                    <TextInput
                        placeholder="Conteudo"
                        multiline={true}
                        placeholderTextColor = "#fff"
                        value={sobre}
                        style={[CadastrarLembreteStyle.input, {height: Math.max(35, 95)}]}
                        onChangeText={(text) => setSobre(text)}
                    ></TextInput>
                </View>

                <TouchableOpacity style={CadastrarLembreteStyle.button} onPress={cadastraTarefa}>
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}