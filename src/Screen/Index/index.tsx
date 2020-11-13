import * as React from 'react';
import {  View, Text, StyleSheet, ScrollView} from 'react-native';
import Default from '../../Styles/Default';

export default function Home () {
    return(
        <View style={Default.main}>
            <ScrollView style={Default.container}>
                <Text>Indx</Text>
            </ScrollView>
        </View>
    );
}