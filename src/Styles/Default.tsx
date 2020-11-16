import * as React from 'react';
import {StyleSheet} from 'react-native';

const Default = StyleSheet.create({
    main: {
        flex: 1,
        alignContent: 'center', 
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#2e2e2e'
    },
    buscaContainer: {
        flexDirection: 'row',
        height: 65,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
    icons: {
        width: 20,
        height: 20
    },
    text: {
        color: '#fff'
    },
    header:{
        backgroundColor: '#2e2e2e',
        height: 70,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 10,
        paddingHorizontal: 25,
        justifyContent: 'flex-end'
    },
});

export default Default;