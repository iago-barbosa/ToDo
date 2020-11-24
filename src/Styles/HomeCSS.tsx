import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get("window");

const HomeStyle = StyleSheet.create({
    main: {
        marginTop: 30,       
    },
    textWelcome: {
        fontSize: 28,
        marginHorizontal: 20, 
    },
    textWelcomeTarefas: {
        fontSize: 22,
        marginTop: 25,
        marginHorizontal: 20, 
    },
    containerTarefas: {
        width: width,
        marginTop: 10
    },
    item: {
        height: 60,
        paddingLeft: 20,
        paddingRight: 60,
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },
    aberto: {
        backgroundColor: '#0053a0'
    },
    concluido: {
        backgroundColor: '#00a000'
    }
});

export default HomeStyle;