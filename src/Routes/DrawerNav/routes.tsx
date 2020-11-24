import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RouteIndex from '../RouteIndex/routes';
import DrawerStyle from '../../Styles/DrawerCSS';
import Default from '../../Styles/Default';
const Drawer = createDrawerNavigator();

export default function NavCategory() {
        return (
            <Drawer.Navigator initialRouteName="RouteIndex" drawerContent={ props => <CustomDrawerComp navigation={props.navigation} /> }>
                <Drawer.Screen name="RouteIndex" component={RouteIndex} />
            </Drawer.Navigator>
        );
}


// <Image source={require('../../../assets/')}></Image>

function CustomDrawerComp ({navigation}: any) {
    return(
        <DrawerContentScrollView style={[Default.container]} >
            <View style={[Default.main, DrawerStyle.main]}>
                <TouchableOpacity style={DrawerStyle.item} onPress={() => navigation.navigate('Home')}>
                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/list-today.png')}></Image>
                    <Text style={[Default.text, DrawerStyle.itemText]}>Hoje</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[DrawerStyle.item, DrawerStyle.itemLast]} onPress={() => navigation.navigate('Lembretes')}>
                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/post-it.png')}></Image>
                    <Text style={[Default.text, DrawerStyle.itemText]}>Lembretes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={DrawerStyle.item} onPress={() => navigation.navigate('Amanha')}>
                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/calendar-day.png')}></Image>
                    <Text style={[Default.text, DrawerStyle.itemText]}>Amanhã</Text>
                </TouchableOpacity>
                <TouchableOpacity style={DrawerStyle.item}>
                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/calendar.png')}></Image>
                    <Text style={[Default.text, DrawerStyle.itemText]}>Em Breve</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[DrawerStyle.item, DrawerStyle.itemLast]} onPress={() => navigation.navigate('Cadastrar')}>
                    <Image style={[Default.icons, DrawerStyle.icons]} source={require('../../../assets/plus-solid.png')}></Image>
                    <Text style={[Default.text, DrawerStyle.itemText]}>Cadastrar Tarefa</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );    
}