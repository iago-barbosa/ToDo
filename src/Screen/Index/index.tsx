import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Default from '../../Styles/Default';
import HomeCSS from '../../Styles/HomeCSS';
import DrawerStyle from '../../Styles/DrawerCSS';
import api from '../../Service/api.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }: any) {

    const [tarefas, setTarefas] = useState([]);
    const [id, setId] = useState({});

    function conclui(_id: any) {
        api.put('/concluiTarefa', { _id: _id }).then((res: any) => {
            listar();
        }).catch(() => {
            listar();
        })
    }

    function exclui(_id: any) {
        api.post('/deletaTarefa', { _id: _id }).then((res: any) => {
            listar();
        }).catch(() => {
            listar();
        })
    }

    function listar() {
        api.get('/tarefas').then((res: any) => {
            setTarefas(res.data)
        })
    }

    useEffect(() => {
        listar();
    }, [])

    return (
        <View style={Default.main}>
            <ScrollView style={Default.container}>
                <View style={HomeCSS.main}>
                    <Text style={[Default.text, HomeCSS.textWelcome]}>Olá, Bem vindo!</Text>
                    <Text style={[Default.text, HomeCSS.textWelcomeTarefas]}>Essas são suas tarefas para hoje:</Text>

                    <View style={HomeCSS.containerTarefas}>
                        {
                            tarefas.map((res: any) => {
                                if (res.status == '1') {
                                    return (
                                        <View style={[HomeCSS.aberto, HomeCSS.item]}>
                                            <TouchableOpacity onPress={() => navigation.navigate('VerTarefas', { _id: res._id })}>
                                                <Text style={Default.text}>{res.titulo}</Text>
                                            </TouchableOpacity>
                                            <View style={Default.status}>
                                                <TouchableOpacity onPress={() => conclui({ _id: res._id })}>
                                                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/verifica.png')}></Image>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => exclui({ _id: res._id })}>
                                                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/trash-solid.png')}></Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                } else if (res.status == '2') {
                                    return (
                                        <View style={[HomeCSS.concluido, HomeCSS.item]}>
                                            <TouchableOpacity onPress={() => navigation.navigate('VerTarefas', { _id: res._id })}>
                                                <Text style={Default.text}>{res.titulo}</Text>
                                            </TouchableOpacity>
                                            <View style={Default.status}>
                                                <TouchableOpacity onPress={() => exclui({ _id: res._id })}>
                                                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/trash-solid.png')}></Image>
                                                </TouchableOpacity>
                                            </View>
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