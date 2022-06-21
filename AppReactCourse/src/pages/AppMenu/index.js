import React, {Component} from 'react';
import {View , Text , StyleSheet, Button, Alert} from 'react-native';

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
               <View style={styles.viewComponents}>
                    <Button style={styles.button} title='Grupo Estilo' onPress={() => this.props.navigation.navigate('GruposEstilo')} />
               </View>
               <View style={styles.viewComponents}>
                    <Button style={styles.button} title='Flex Alinhamento' onPress={() => this.props.navigation.navigate('FlexAlinhamento')} />
               </View>
               <View style={styles.viewComponents}>
                    <Button style={styles.button} title='Aula 2 - Trab. Componente' onPress={() => this.props.navigation.navigate('Aula_2')} />
               </View>
               <View style={styles.viewComponents}>
                    <Button style={styles.button} title='Aula 3 - Input de dados' onPress={() => this.props.navigation.navigate('Aula_3')} />
               </View>
               <View style={styles.viewComponents}>
                    <Button style={styles.button} title='Aula 3 - Calculadora' onPress={() => this.props.navigation.navigate('Aula_4')} />
               </View>
            </View>
    
        );
     }

}

const styles = StyleSheet.create({
    container: {
        flex:2,
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