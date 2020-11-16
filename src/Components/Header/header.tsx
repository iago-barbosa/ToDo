import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Default from '../../Styles/Default';

export default function Header({navigation}){
    const route = useRoute();
    return(
        <View style={Default.header} >
            <TouchableOpacity onPress={() => navigation.openDrawer()} >
                <Image style={Default.icons} source={require('../../../assets/bars.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}