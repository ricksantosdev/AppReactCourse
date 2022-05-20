import React , {Component} from 'react';
import {View , Text , StyleSheet, Button} from 'react-native';

export default class  StateReact extends Component{
    
    constructor(props){
        super(props);


        this.state = {
            nome:''
        }

        this.mudarNome = this.mudarNome.bind(this);
    }
   

    mudarNome(nome){
        this.setState({
            nome:nome
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Alterando texto {this.state.nome} </Text>
                <Text style={styles.textoNormal}>TEXTO 1 </Text>
                <Text style={styles.textoAlinhado}>TEXTO 2 </Text>
                <Text style={[styles.textoNormal , styles.textoAlinhado] }> COM TODAS AS FORMATACOES  </Text>

                <Button title="Alterar nome" onPress={() => this.mudarNome('fdsjlkfjas')}/>
                <Button title="Menu" onPress={() => this.props.navigation.navigate('Menu')}/>
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
    textoNormal:{
        fontSize:30,
        color:'red'
    },
    textoAlinhado:{
        textAlign:'center'
    }
})