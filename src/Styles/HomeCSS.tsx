import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get("window");

const HomeStyle = StyleSheet.create({
    main: {
        marginTop: 30,
        marginHorizontal: 20,        
    },
    textWelcome: {
        fontSize: 28,
    },
    pieChart: {
        width: width/2,
        height: width/2,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 20
    },
});

export default HomeStyle;