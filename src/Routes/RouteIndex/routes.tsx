import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screen/Index/index';

const Stack = createStackNavigator();

export default function RouteIndex () {
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}