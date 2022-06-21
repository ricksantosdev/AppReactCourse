import React , {Component} from "react";
import {View , Text , Image } from  'react-native';


export default class ImageComponent extends Component {
    render() {
        let enderecoImagem = this.props.endereco;
        let largura = this.props.largura;
        let altura = this.props.altura;

        return(
            <View>
                <Image source={{uri: enderecoImagem }}  style={{width: largura , height: altura }} />
            </View>
        );
    }
}