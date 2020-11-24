import React, { useState, useEffect } from 'react';
import {  View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Default from '../../Styles/Default';
import HomeCSS from '../../Styles/HomeCSS';
import DrawerStyle from '../../Styles/DrawerCSS';
import api from '../../Service/api.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home ({navigation}:any) {

    const [tarefas, setTarefas] = useState([]);
    const [id, setId] = useState({});

    function conclui(_id:any){
        api.post('/concluiTarefa', {_id: _id}).then((res:any) => {
            navigation.navigation('Cadastrar');
        })
    }

    function exclui(_id:any){
        api.post('/deletaTarefa', {_id: _id}).then((res:any) => {
                navigation.navigation('Cadastrar');
        })
    }
    
    useEffect(() => {
        
        api.get('/tarefas').then((res:any) => {
            setTarefas(res.data)
        })
    }, [])

    return(
        <View style={Default.main}>
            <ScrollView style={Default.container}>
                <View style={HomeCSS.main}>
                    <Text style={[Default.text, HomeCSS.textWelcome]}>Olá, Bem vindo!</Text>
                    <Text style={[Default.text, HomeCSS.textWelcomeTarefas]}>Essas são suas tarefas para hoje:</Text>
                    
                    <View style={HomeCSS.containerTarefas}>
                        {
                            tarefas.map((res:any) =>{
                                if(res.status == '1'){
                                    return( 
                                        <View style={[HomeCSS.aberto, HomeCSS.item]}>
                                            <Text>{res.titulo}</Text>
                                            <View style={Default.status}>
                                                <TouchableOpacity onPress={() => conclui({_id: res._id})}>
                                                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/verifica.png')}></Image>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => exclui({_id: res._id})}>
                                                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/trash-solid.png')}></Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View> 
                                    )
                                } else if(res.status == '2'){
                                    return(
                                        <View style={[HomeCSS.concluido, HomeCSS.item]}>
                                            <Text>{res.titulo}</Text>
                                        </View> 
                                    )
                                }
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}