import * as React from 'react';
import { StyleSheet } from 'react-native';

const Default = StyleSheet.create({
    main: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#282828'
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
    header: {
        backgroundColor: '#1c1c1c',
        height: 70,
        //borderBottomWidth: 1,
        //borderColor: '#ccc',
        paddingBottom: 10,
        paddingHorizontal: 25,
        justifyContent: 'flex-end'
    },
    status: { 
        position: 'absolute', 
        right: 0, 
        flex: 1, 
        flexDirection: 'row', 
    }
});

export default Default;