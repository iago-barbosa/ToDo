import * as React from 'react';
import {StyleSheet} from 'react-native';

const Default = StyleSheet.create({
    main: {
        flex: 1,
        alignContent: 'center', 
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignContent: 'center',
    },
    buscaContainer: {
        flexDirection: 'row',
        height: 65,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
        
    },
    icons: {
        width: 30,
        height: 30
    },
});

export default Default;