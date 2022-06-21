import React , {Component} from "react";
import {View , Button , Text, TextInput, StyleSheet} from 'react-native';

export default class Aula_4 extends Component{
    constructor(props){
        super(props);

        //criar as states

        this.state = {
            valor1 : '',
            valor2: '' ,
            resultado: ''
        }
        
        //dando bind do botao

        this.somar = this.somar.bind(this);
        this.subtrair = this.subtrair.bind(this);
        this.multiplicar = this.multiplicar.bind(this);
        this.dividir = this.dividir.bind(this);
    }


    somar(){
        let resultadoCalculo = 0;
        let val1  = parseFloat(this.state.valor1);
        let val2 = parseFloat(this.state.valor2);
        resultadoCalculo = val1 + val2;

        this.setState({resultado: 'A soma dos numeros é: ' + resultadoCalculo });
    }

    subtrair(){
        let resultadoCalculo = 0;
        let val1  = parseFloat(this.state.valor1);
        let val2 = parseFloat(this.state.valor2);
        resultadoCalculo = val1 - val2;

        this.setState({resultado: 'A soma dos numeros é: ' + resultadoCalculo });
    }



    multiplicar(){
        let resultadoCalculo = 0;
        let val1  = parseFloat(this.state.valor1);
        let val2 = parseFloat(this.state.valor2);
        resultadoCalculo = val1 * val2;

        this.setState({resultado: 'A soma dos numeros é: ' + resultadoCalculo });
    }

    dividir(){
        let resultadoCalculo = 0;
        let val1  = parseFloat(this.state.valor1);
        let val2 = parseFloat(this.state.valor2);
        resultadoCalculo = val1 / val2;

        this.setState({resultado: 'A soma dos numeros é: ' + resultadoCalculo });
    }

    
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.textoDigitado}> Valor 1 :</Text>
                    <TextInput  
                    style={styles.input}
                    placeholder="Digite um numero"
                    onChangeText={(texto) => this.setState({valor1: texto}) }

                    />
                </View>
                <View>
                    <Text style={styles.textoDigitado}> Valor 2 :</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="Digite um numero"
                    onChangeText = {(texto) => this.setState({valor2: texto}) }

                    />
                </View>
                <View>
                 
                   <Button style={styles.botao}                     
                     title="+" onPress={this.somar}/>
                    <Button   style={styles.botao}                      
                     title="-" onPress={this.subtrair}/>
                     <Button   style={styles.botao}                      
                     title="X" onPress={this.multiplicar}/>
                     <Button    style={styles.botao}                     
                     title="/" onPress={this.dividir}/>

                    <Text style={styles.textoDigitado}> 
                     {this.state.resultado}
                    </Text>
                    
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30
    },
    input:{
        height:45,
        borderWidth:1,
        borderColor:'#222',
        fontSize:20,
        padding:10
    },
    textoDigitado:{
        textAlign:'center',
        fontSize:25
    },
    botao:{
       fontSize:30
    }
});