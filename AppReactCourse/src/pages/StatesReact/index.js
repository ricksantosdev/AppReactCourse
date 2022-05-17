import React from 'react';
import {View , Text , StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StateReact() {
    const navigation = useNavigation();

    return(
        <View>
            <Text>Trabalhando com propriedades no States no react  </Text>
            <Button title="Menu" onPress={() => navigation.navigate('Menu')}/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})