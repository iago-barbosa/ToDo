import React, { useState, useEffect } from 'react';
import {  View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Default from '../../Styles/Default';
import CadastrarLembreteStyle from '../../Styles/CadastrarLembreteCSS';
import DatePicker from 'react-native-datepicker';
import api from '../../Service/api.js';

export default function CadastrarLembrete ({navigation}:any) {
    const [tarefas, setTarefas] = useState();

    useEffect(() => {
        
        api.get('/tarefas').then((res:any) => {
            setTarefas(res.data)
        })
    }, [])

    return(
        <View style={Default.main}>
            <ScrollView 
                horizontal 
                decelerationRate="fast" 
                showsHorizontalScrollIndicator={false}
            >
            </ScrollView>
        </View>
    )
}