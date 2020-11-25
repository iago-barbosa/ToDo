import React, { useState, useEffect } from 'react';
import {  View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Default from '../../Styles/Default';
import DrawerStyle from '../../Styles/DrawerCSS';
import VerTarefasStyle from '../../Styles/VerTarefasCSS';
import api from '../../Service/api.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function VerLembretes ({route, navigation}:any) {
    const { _id } = route.params;
    const [lembrete, setLembrete] = useState([]);

    function exclui(_id:any){
        api.post('/deletaLembrete', {_id: _id}).then((res:any) => {
            navigation.navigate('Home');
        }).catch(() =>{
            navigation.navigate('Home');
        })
    }

    function listar(_id:any){ 
        api.get('/verLembretes/'+_id).then((res:any) => {
            setLembrete(res.data)
        })
    }  
    
    useEffect(() => {
        listar(_id);
    }, [])

    return(
        <View style={Default.main}>
            <ScrollView style={Default.container}>
                <View>
                    {
                        lembrete.map((res:any) =>{
                            return( 
                                <View style={VerTarefasStyle.main}>
                                        <View style={VerTarefasStyle.container}>
                                            <Text style={[Default.text, VerTarefasStyle.titulo]}>{res.titulo}</Text>
                                            <View style={VerTarefasStyle.iconContainer}>
                                                <TouchableOpacity onPress={() => exclui({_id: res._id})}>
                                                    <Image style={[Default.icons, DrawerStyle.icons, {width: 25, height: 25}]} source={require('../../../assets/trash-solid.png')}></Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={VerTarefasStyle.textoContainer}>
                                            <Text style={[Default.text, VerTarefasStyle.texto]}>{res.texto}</Text>
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