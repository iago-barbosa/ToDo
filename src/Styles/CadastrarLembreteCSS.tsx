import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get("window");

const CadastrarLembreteStyle = StyleSheet.create({
    main:  {
        backgroundColor: '#282828', 
        flex: 1,
        alignContent: 'center', 
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 30
    },
    text: {
        color: '#ffffff',
        fontSize: 16
    },
    inputItem: {
        marginVertical: 15
    },
    input: {
        width: width-60,
        borderColor: '#fff',
        borderWidth: 1,
        height: 50,
        color: '#fff',
        paddingLeft: 15
        
    },
    inputDate: {
        width: width-60,
        height: 50,
        color: '#fff',
        
    },
    button: {
        width: width-60,
        marginTop: 15,
        backgroundColor: '#ff6961',
        paddingVertical: 10,
        alignItems: 'center'
    },
    
});

export default CadastrarLembreteStyle;