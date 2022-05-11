import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {View , Text , StyleSheet, Button, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PropsReact() {

        let nomeProgramador = 'Ricardo Santos de jesus';
        let idade = 39;
        let diasIdade = 354;

        return(
          <View style={styles.container}>
          <Text style={{color:'red', fontSize:40 , margin:10 }}> Propriedades React </Text>
          {/* COMENTANDO A IMAGEM ANTERIOR -- PARA USAR O COMPONENTE DE IMAGEM
          <Image source={{uri:'https://sujeitoprogramador.com/steve.png'}}
          style={{width:300 , height:300}}
        /> 
        */}
        <ImageJobs largura={200} 
        altura={300}  
        endereco="https://thumbs.dreamstime.com/b/steve-jobs-wax-figure-madame-tussauds-museum-istanbul-turkey-march-was-co-founder-chairman-chief-executive-officer-102591903.jpg"/>
        
        <Text style={{ fontSize:20, margin:10, color:'green' }}> Nome do Programador:  {nomeProgramador} </Text>
        <Text style={styles.texto}>  Idade {idade} e dias {diasIdade} </Text>

        

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

/* Componente para renderizar imagem */
class ImageJobs extends Component{
    render(){
      let enderecoImagem = this.props.endereco;
      return(
        <View>
          <Image  source={{uri: enderecoImagem}} style={{width:this.props.largura  , height: this.props.altura }} />
        </View>
      );
    }
  }
  