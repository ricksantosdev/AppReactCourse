import React , {Component} from "react";
import {View , Text , StyleSheet, Button} from 'react-native';

export default class FlexAlinhamento extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.conteiner}>
                <View style={{height:50 , width:50 , backgroundColor:'red'}}></View>
                <View style={{height:50 , width:50 , backgroundColor:'blue'}}></View>
                <View style={{height:50 , width:50 , backgroundColor:'green'}}></View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        flexDirection:'row',
       
        justifyContent:'center',
        marginTop:40,
    }
})