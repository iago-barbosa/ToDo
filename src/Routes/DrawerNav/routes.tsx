import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import RouteIndex from '../RouteIndex/routes';
const Drawer = createDrawerNavigator();

export default function NavCategory() {
        return (
            <Drawer.Navigator initialRouteName="RouteIndex" drawerContent={ props => <CustomDrawerComp navigation={props.navigation} /> }>
                <Drawer.Screen name="RouteIndex" component={RouteIndex} />
            </Drawer.Navigator>
        );
}




function CustomDrawerComp ({navigation}: any) {
    return(
        <DrawerContentScrollView >
            <View>
                <Text>Texto</Text>
            </View>
        </DrawerContentScrollView>
    );    
}