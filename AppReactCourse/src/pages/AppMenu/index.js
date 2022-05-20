import React, {Component} from 'react';
import {View , Text , StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { render } from 'react-dom';


export default class Menu extends Component {

    constructor(props){
        super(props);
    }

     render() {
        return(
            <View style={styles.container}>
                <View style={styles.viewComponents}>
                <Button style={styles.button} title='Props' onPress={() => this.props.navigation.navigate('PropsReact')}/>
                </View>
               <View style={styles.viewComponents}>
               <Button style={styles.button} title='State' onPress={() => this.props.navigation.navigate('StateReact')} />
               </View>
               
            </View>
    
        );
     }

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