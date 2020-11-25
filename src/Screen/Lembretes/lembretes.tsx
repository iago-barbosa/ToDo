import React, { useState, useEffect } from 'react';
import {  View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Default from '../../Styles/Default';
import HomeCSS from '../../Styles/HomeCSS';
import DrawerStyle from '../../Styles/DrawerCSS';
import api from '../../Service/api.js';

export default function Home ({navigation}:any) {
    const [lembrete, setLembrete] = useState([]);
    
    function exclui(_id:any){
        api.post('/deletaLembrete', {_id: _id}).then((res:any) => {
            listar();
        }).catch(() =>{
            listar(); 
        })
    }

    function listar(){
        api.get('/lembretes').then((res:any) => { 
            setLembrete(res.data)
        })
    }
    
    useEffect(() => {
        listar();
    }, [])


    return(
        <View style={Default.main}>
            <ScrollView style={Default.container}>
            <View style={HomeCSS.containerTarefas}>
                        {
                            lembrete.map((res:any) =>{
                                return( 
                                    <View style={[HomeCSS.aberto, HomeCSS.item]}>
                                        <TouchableOpacity onPress={() => navigation.navigate('VerLembretes', {_id: res._id})}>
                                            <Text style={Default.text}>{res.titulo}</Text>
                                        </TouchableOpacity>
                                        <View style={Default.status}>
                                            <TouchableOpacity onPress={() => exclui({_id: res._id})}>
                                                <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/trash-solid.png')}></Image>
                                            </TouchableOpacity>
                                        </View>
                                    </View> 
                                )
                            })
                        }
                    </View>
            </ScrollView>
        </View>
    );
}