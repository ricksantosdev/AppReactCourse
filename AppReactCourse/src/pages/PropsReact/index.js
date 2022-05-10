import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

export default function PropsReact() {
    return(
        <View>
            <Text>Trabalhando com propriedades no react </Text>
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