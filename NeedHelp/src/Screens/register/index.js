import React from 'react'
import { View, Text, Button, ImageBackground, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'

import styles from './style'
import stylesGeral from '../styleGeral'

import { TabsRoutes } from '../../Routes/tabs.routes';


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                              accessible={false}>
      {children}
  </TouchableWithoutFeedback>


);

export default function Register({navigation}) {


    const [nome, onChangeNome] = React.useState();
    const [email, onChangeEmail] = React.useState();
    const [senha, onChangeSenha] = React.useState();
    const [confirmarSenha, onChangeConfirmarSenha] = React.useState();


    return (
        <ImageBackground
            source={require('../../../assets/Hi-fi/imagemFundo.png')}
            style={stylesGeral.imageFundo}
        >
            <View style={stylesGeral.screen}>
                <View style={stylesGeral.screenSecundaria}>
                    <View>
                        <View style={{alignItems: "center"}}>
                            <TouchableOpacity style={styles.circuloImage}>
                                <Image
                                    source={require('../../../assets/Hi-fi/iconpeople.png')}
                                    style={styles.iconPeople}
                                />
                                <Image
                                    source={require('../../../assets/Hi-fi/seta.png')}
                                    style={styles.iconSeta}
                                />    
                                
                            </TouchableOpacity>
                        </View>
                    </View>
                    <DismissKeyboard>
                        <View style={styles.formulario}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNome}
                                value={nome}
                                placeholder="Nome"
                            />
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
                                placeholder="Senha"

                            />
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={onChangeConfirmarSenha}
                                value={confirmarSenha}
                                placeholder="Confirmar senha"

                            />
                        </View>
                    </DismissKeyboard>
                    <View>
                        <TouchableOpacity
                            style={stylesGeral.buttom}
                            onPress={() => {
                                navigation.navigate('ConfirmEmail')
                            }}
                        >
                            <Text style={{ color: "#FFF" }}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 50}}>
                        <Text style={styles.textAcessar}>Acessar</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
}
