import * as React from 'react';
import {  View, Text, StyleSheet, ScrollView} from 'react-native';
import Default from '../../Styles/Default';
import HomeCSS from '../../Styles/HomeCSS';
import {PieChart} from 'react-native-svg-charts';

export default function Home ({navigation}) {
    const data = [35, 65];
    const pieData = data.map((value, index) =>({
        value,
        key: `${index}-${value}`,
        svg: {
            fill: '#fff'
        }
    }));
    return(
        <View style={Default.main}>
            <ScrollView style={Default.container}>
                <View style={HomeCSS.main}>
                </View>
            </ScrollView>
        </View>
    );
}