import * as React from 'react';
import {StyleSheet} from 'react-native';

const DrawerStyle = StyleSheet.create({
    main: {
        marginTop: 55,        
    },
    item: {
        height: 50,
        paddingLeft: 20,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#c3c3c3',
        paddingVertical: 15
    },
    itemLast: {
        borderBottomWidth: 1,
        borderBottomColor: '#c3c3c3',
    },
    itemText: {
        marginLeft: 0
    },
    icons: {
        marginHorizontal: 15
    },
});

export default DrawerStyle;