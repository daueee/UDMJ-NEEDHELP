import React from 'react'
import { View, Text, Button, ImageBackground, TouchableOpacity, Image } from 'react-native'

import styles from './style'
import stylesGeral from '../styleGeral'

import { TabsRoutes } from '../../Routes/tabs.routes';

export default function Welcome({ navigation }) {


    return (
        <ImageBackground
            source={require('../../../assets/Hi-fi/imagemFundo.png')}
            style={stylesGeral.imageFundo}
        >
            <View style={stylesGeral.screen}>
                <View style={stylesGeral.screenSecundaria}>
                    <View style={styles.div}>
                        <TouchableOpacity
                            style={styles.buttomPular}
                            onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Home' }]
                                })
                            }}
                        >
                            <Text style={{ color: "#604412" }}>Pular</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 2 }}>
                        <Text style={styles.text}>
                            Olá, usuário bem-vindo ao
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/Hi-fi/logoNeed.png')}
                            style={styles.logoNeedHelp}
                        />
                    </View>
                    <View>
                        <Text style={styles.textDescricao}>
                            Por favor ative sua localização para encontrar os melhores profissionais em sua região
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={stylesGeral.buttom}
                            onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Home' }]
                                })
                            }}
                        >
                            <Text style={{ color: "#FFF" }}>Ativar localização</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
}