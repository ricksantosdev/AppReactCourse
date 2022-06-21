import React , {Component} from  'react';
import {View , Text , Button , StyleSheet, Image } from 'react-native';
import ImageComponent from '../../Componentes/ImagemComponent';

export default class Aula_2 extends Component{
    render(){
        return(
            <View style={styles.container}>
               <ImageComponent endereco="https://thumbs.dreamstime.com/b/steve-jobs-wax-figure-madame-tussauds-museum-istanbul-turkey-march-was-co-founder-chairman-chief-executive-officer-102591903.jpg"  
               largura={400} 
               altura={200}  
            />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40
    }
})

