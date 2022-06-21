import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button , View, Text} from 'react-native';
import StateReact from './src/pages/StatesReact';
import PropsReact from './src/pages/PropsReact';
import Menu from './src/pages/AppMenu';
import GruposEstilo from './src/pages/GruposEstilo'
import FlexAlinhamento from './src/pages/FlexBox';
import Aula_2 from './src/pages/Aula_2';
import Aula_3 from './src/pages/Aula_3';
import Aula_4 from './src/pages/Aula_4';

let Stack = createStackNavigator();
export default class App extends Component{
  constructor(props){
    super(props);
  }
 
 render(){

  return(

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu}
      options={{
        headerShown:false,
      }}
      
      /> 
      <Stack.Screen name="StateReact" component={StateReact}
      options={{
        headerShown:false,
      }}
      /> 
      <Stack.Screen name="PropsReact" component={PropsReact}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen name="GruposEstilo" component={GruposEstilo}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen name="FlexAlinhamento" component={FlexAlinhamento}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen name="Aula_2" component={Aula_2}
        options={{
          headerShown:false,
        }}
      />
       <Stack.Screen name="Aula_3" component={Aula_3}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen name="Aula_4" component={Aula_4}
        options={{
          headerShown:false,
        }}
      />


    </Stack.Navigator>
  </NavigationContainer>

);
}
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize:30,
    backgroundColor:'black',
    color:'white',
    margin:10,
  }
});

