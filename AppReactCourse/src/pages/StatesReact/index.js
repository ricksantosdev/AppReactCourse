import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

export default function StateReact() {
    return(
        <View>
            <Text>Trabalhando com propriedades no States no react  </Text>
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