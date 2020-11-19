import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get("window");

const CadastrarStyle = StyleSheet.create({
    main:  {
        backgroundColor: '#282828', 
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#ff6961',
        width: (width/100)*80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    text: {
        color: '#ffffff',
        fontSize: 20
    },
    
});

export default CadastrarStyle;