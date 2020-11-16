import * as React from 'react';
import {  View, Text, StyleSheet, ScrollView} from 'react-native';
import Default from '../../Styles/Default';

export default function Cadastrar () {
    return(
        <View style={Default.main}>
            <ScrollView style={Default.container}>
                <Text style={Default.text}>Cadastrar</Text>
            </ScrollView>
        </View>
    );
}