import React , {Component} from "react";
import { View , TextInput , Text , StyleSheet} from "react-native";

export default class Aula_3 extends Component{
    constructor(props){
        super(props);
        //criando state para manipular dados dentro jsx
        this.state = {
            nome:''
        };

        //toda funcao criada precisa dar bind
        this.recebeNome = this.recebeNome.bind(this);
    }
    

    recebeNome(texto){
        if(texto.length > 0){
            this.setState({nome: 'Bem vindo amigo:  ' + texto});
        }else{
            this.setState({nome:''})
        }
    }

    render(){
        return(
            //o evento onChangeText é acionado toda vez que o usuário clica na caixa de texto
            <View style={styles.container}>
                <TextInput style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={this.recebeNome}
                />
                <Text style={styles.textoDigitado}>
                    {this.state.nome}
                </Text>
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
    }
});