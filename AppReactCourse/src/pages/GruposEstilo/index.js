import React , {Component} from 'react';
import {View , Text , StyleSheet, Button} from 'react-native';

export default class GruposEstilo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.conteudo}>
               <View style={{flex:1 , backgroundColor:'red'}}>

               </View>
               <View style={styles.conteudoAula}>
                    <Text style={styles.formatacaoTexto}> Texto </Text>
                    <Text style={styles.formatacaoTexto}> Texto </Text>
                    <Text style={styles.alinhamentoTexto1}> Texto </Text>
                    <Text style={[styles.alinhamentoNegrito , styles.tamanhoTextoCor]}> Texto </Text>
               </View>

                <View style={styles.botaoVoltar}>
                    <Button  title='Menu' onPress={() => this.props.navigation.navigate('Menu')} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    conteudo:{
        marginTop:50,
        flex:1,
        backgroundColor:'gray'
    },
    conteudoAula:{
        flex:4,
    },
    botaoVoltar:{
        height:50,
    },
    formatacaoTexto:{
        textAlign:'center',
        fontSize:50,
        color:'red'
    },
    alinhamentoTexto1:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'right'
    },
    alinhamentoNegrito:{
        textAlign:'center',
        fontWeight:'bold'
    },
    tamanhoTextoCor:{
        fontSize:50,
        color:'green'
    }
})

{/* \flex determina o taanho do bloco e constroi dinamicamente a depender da qtdade de componente em tela   */}