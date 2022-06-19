import React from 'react'
import { View, Text, Button, ImageBackground, TouchableOpacity, Keyboard } from 'react-native'

import styles from './style'
import stylesGeral from '../styleGeral'

import { TabsRoutes } from '../../Routes/tabs.routes';

export default function ConfirmEmail({ navigation }) {


    return (
        <ImageBackground
            source={require('../../../assets/Hi-fi/imagemFundo.png')}
            style={stylesGeral.imageFundo}
        >
            <View style={stylesGeral.screen}>
                <View style={stylesGeral.screenSecundaria}>
                    <View>
                        <Text style={styles.text}>
                            Acesse seu e-mail para confirmar seu cadastro
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={stylesGeral.buttom}
                            onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Login' }]
                                })
                            }}
                        >
                            <Text style={{ color: "#FFF" }}>Fazer Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
}