import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get("window");

const VerTarefasStyle = StyleSheet.create({
    main:  {
        width: width,
        marginVertical: 25,
        marginHorizontal: 20
    },
    container: {
        flexDirection: 'row',
        width: width-140,
    },
    titulo: {
        fontSize: 26
    },
    iconContainer: {
        position: 'absolute',
        right: 0,
        height: 35
    },
    iconContainer2: {
        flexDirection: 'row',
        position: 'absolute',
        marginRight: 0,
        right: -100,
        height: 35
    },
    textoContainer: {
        marginTop: 50,
        width: width-40,
    },
    texto: {
        fontSize: 20
    }
    
});

export default VerTarefasStyle;