import React from 'react';
import {View , Text , StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Menu() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.viewComponents}>
            <Button style={styles.button} title='Props' onPress={() => navigation.navigate('PropsReact')}/>
            </View>
           <View style={styles.viewComponents}>
           <Button style={styles.button} title='State' onPress={() => navigation.navigate('StateReact')} />
           </View>
           
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    button:{
        paddingTop:10,
        width:350,
    },
    viewComponents:{
        paddingTop:10,
        width:350,
    }
})