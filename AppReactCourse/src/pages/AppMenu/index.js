import React from 'react';
import {View , Text , StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Menu() {
    const navigation = useNavigation();

    return(
        <View >
           <Button title='Props' onPress={() => navigation.navigate('PropsReact')}/>
           <Button title='State' onPress={() => navigation.navigate('StateReact')} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        
    }
})