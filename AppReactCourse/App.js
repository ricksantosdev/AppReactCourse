
import React, {Component} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button , View} from 'react-native';
import PropsReact from './src/pages/PropsReact';
import StateReact from './src/pages/StatesReact';



export default function App(){
  const Stack = createStackNavigator();


    return(
     <View styles={styles.container}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PropsReact" component={PropsReact}/>
          <Stack.Screen name="StateReact" component={StateReact}/> 
        </Stack.Navigator>
      </NavigationContainer>


     </View>
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

