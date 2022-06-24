import React , {Component} from "react";
import {View , Button , Text, TextInput, StyleSheet , TouchableOpacity} from 'react-native';

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

        this.setState({resultado: 'A subtracao dos numeros é: ' + resultadoCalculo });
    }



    multiplicar(){
        let resultadoCalculo = 0;
        let val1  = parseFloat(this.state.valor1);
        let val2 = parseFloat(this.state.valor2);
        resultadoCalculo = val1 * val2;

        this.setState({resultado: 'A multiplicacao dos numeros é: ' + resultadoCalculo });
    }

    dividir(){
        let resultadoCalculo = 0;
        let val1  = parseFloat(this.state.valor1);
        let val2 = parseFloat(this.state.valor2);
        resultadoCalculo = val1 / val2;

        this.setState({resultado: 'A divisao dos numeros é: ' + resultadoCalculo });
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
                    keyboardType='numeric'
                    />
                </View>
                <View>
                    <Text style={styles.textoDigitado}> Valor 2 :</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="Digite um numero"
                    onChangeText = {(texto) => this.setState({valor2: texto}) }
                    keyboardType='numeric'
                    />
                </View>
                <View style={styles.operacao}>
                 <TouchableOpacity style={styles.botao}  onPress={this.somar}>
                    <Text style={styles.textoBotao}> + </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.botao}  onPress={this.subtrair}>
                    <Text style={styles.textoBotao}> - </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.botao}  onPress={this.multiplicar}>
                    <Text style={styles.textoBotao}> X </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.botao}  onPress={this.dividir}>
                    <Text style={styles.textoBotao}> / </Text>
                 </TouchableOpacity>


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
        marginTop:30,

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
       fontSize:30,
       backgroundColor:'#333',
       borderRadius:25,
       width:150,
       justifyContent:'center',
       marginLeft:125,
       borderColor:'blue',
       borderWidth:3,
       marginTop:5
    },
    textoBotao:{
        fontSize:30,
        color:'white',
        textAlign:'center',
        borderRadius:25
    },
    operacao:{

    }
});