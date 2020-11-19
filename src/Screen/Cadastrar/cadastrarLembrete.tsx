import React, { useState } from 'react';
import {  View, Text, TextInput, TouchableOpacity} from 'react-native';
import Default from '../../Styles/Default';
import CadastrarStyle from '../../Styles/CadastrarCSS';
import DatePicker from 'react-native-datepicker';

export default function Cadastrar () {

    const [dataEntrega, setdataEntrega] = useState('');

    return(
        <View style={Default.main}>
            <View style={Default.container}>
                <View >
                    <Text>Titulo da Tarefa:</Text>
                    <TextInput
                        placeholder="titulo"
                    ></TextInput>
                </View>

                <View >
                    <Text>Conteudo da tarefa:</Text>
                    <TextInput
                        placeholder="texto"
                    ></TextInput>
                </View>

                <View >
                    <Text>Email:</Text>
                    <TextInput
                        placeholder="exemplo@exemplo.com"
                    ></TextInput>
                </View>

                <View >
                    <DatePicker 
                        format="YYYY-MM-DD"
                        mode="date"
                        placeholder="select date"
                        minDate="1900-01-01"
                        maxDate="2007-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        date={dataEntrega}
                        onDateChange={(date) => {setdataEntrega(date)}}
                    />
                </View>

                <View >
                    <Text>Sobre:</Text>
                    <TextInput
                        placeholder="exemplo@exemplo.com"
                    ></TextInput>
                </View>

                <TouchableOpacity >
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}