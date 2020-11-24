import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../Components/Header/header';
import Home from '../../Screen/Index/index';
import Lembretes from '../../Screen/Lembretes/lembretes';
import Amanha from '../../Screen/Amanha/amanha';
import Cadastrar from '../../Screen/Cadastrar/cadastrar';
import CadastrarLembrete from '../../Screen/Cadastrar/cadastrarLembrete';
import Tarefas from '../../Screen/Cadastrar/cadastrarTarefas';

const Stack = createStackNavigator();

export default function RouteIndex () {
    //navigation={props.navigation}
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" options={{ header: props => <Header navigation={props.navigation}  /> }} component={Home} />
            <Stack.Screen name="Lembretes" options={{ header: props => <Header navigation={props.navigation}  /> }} component={Lembretes} />
            <Stack.Screen name="Amanha" options={{ header: props => <Header navigation={props.navigation}  /> }} component={Amanha} />
            <Stack.Screen name="Cadastrar" options={{ header: props => <Header navigation={props.navigation}  /> }} component={Cadastrar} />
            <Stack.Screen name="CadastrarLembrete" options={{ header: props => <Header navigation={props.navigation}  /> }} component={CadastrarLembrete} />
            <Stack.Screen name="Tarefas" options={{ header: props => <Header navigation={props.navigation}  /> }} component={Tarefas} />
        </Stack.Navigator>
    );
}