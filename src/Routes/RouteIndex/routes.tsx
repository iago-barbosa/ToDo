import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screen/Index/index';
import Cadastrar from '../../Screen/Cadastrar/cadastrar';
import Header from '../../Components/Header/header';

const Stack = createStackNavigator();

export default function RouteIndex () {
    //navigation={props.navigation}
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" options={{ header: props => <Header navigation={props.navigation}  /> }} component={Home} />
            <Stack.Screen name="Cadastrar" options={{ header: props => <Header navigation={props.navigation}  /> }} component={Cadastrar} />
        </Stack.Navigator>
    );
}