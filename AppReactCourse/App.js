import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button , View, Text} from 'react-native';
import StateReact from './src/pages/StatesReact';
import PropsReact from './src/pages/PropsReact';
import Menu from './src/pages/AppMenu';

export default function App(){
  const Stack = createStackNavigator();

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
         
        </Stack.Navigator>
      </NavigationContainer>

    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
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

