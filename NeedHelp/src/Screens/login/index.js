import React from 'react'
import {View, Text, Button, ImageBackground, Image, TextInput, TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native'

import styles from './style'
import stylesGeral from '../styleGeral'


styles.imageFundo = undefined;
const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                              accessible={false}>
      {children}
  </TouchableWithoutFeedback>


);



export default function Login({ navigation }){

    function openScreenRegister(){ 
        navigation.navigate('Register')
    }

    function openScreen(){

    }

    const [email, onChangeEmail] = React.useState();
    const [senha, onChangeSenha] = React.useState();


    return (
        <ImageBackground
                source={require('../../../assets/Hi-fi/imagemFundo.png')}
                style={stylesGeral.imageFundo}
            >
        <View style={stylesGeral.screen}>
            <View style={stylesGeral.screenSecundaria}>
                <Image
                source={require('../../../assets/Hi-fi/logoNeed.png')}
                style={styles.logoNeedHelp}
                />
                <TouchableWithoutFeedback
                    onPress={()=>{
                        Keyboard.dismiss();
                    }}>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Email"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={onChangeSenha}
                        value={senha}
                        placeholder="senha"

                    />
                </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={styles.textPassword}>Esqueceu a senha?</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={stylesGeral.buttom}
                        onPress={() => {
                            navigation.reset({
                                index: 0,
                                routes: [{name: 'Welcome'}]
                            })
                        }}
                    >
                        <Text style={stylesGeral.text}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text 
                        style={styles.textNewAccount}
                        onPress={openScreenRegister}
                        >Criar nova conta</Text>
                </View>
            </View>
        </View>
        </ImageBackground>
    );
}

