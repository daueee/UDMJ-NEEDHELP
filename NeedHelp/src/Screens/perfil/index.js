import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'

import styles from './style'
import stylesGeral from '../styleGeral'

export function Perfil() {


    return (
        <ImageBackground
            source={require('../../../assets/Hi-fi/imagemFundo.png')}
            style={stylesGeral.imageFundo}
        >
            <View style={stylesGeral.screen}>
                <View style={stylesGeral.screenSecundaria}>
                    <View style={styles.textoPerfilInicial}>
                        <Text style={styles.text}>
                            Tela Perfil
                        </Text>
                    </View>
                    <View>
                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity style={styles.circuloImage}>
                                <Image
                                    source={require('../../../assets/Hi-fi/iconpeople.png')}
                                    style={styles.iconPeople}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.textoPerfil}>
                        <Text style={styles.text}>
                            Usuário
                        </Text>
                        <Text style={styles.textInformacoes}>
                            usuario@needhelp.com
                        </Text>
                    </View>
                    <View style={styles.historicoPerfil}>
                        <View style={styles.textHistoricoPerfil}>
                            <Text>
                                5
                            </Text>
                            <Text>
                                Reviews
                            </Text>
                        </View>
                        <View style={styles.textHistoricoPerfil}>
                            <Text>
                                4
                            </Text>
                            <Text>
                                Contratações
                            </Text>
                        </View>
                        <View style={styles.textHistoricoPerfil}>
                            <Text>
                                10
                            </Text>
                            <Text>
                                orçamentos
                            </Text>
                        </View>
                    </View>
                    <View style={styles.divButtom}>
                        <View>
                            <TouchableOpacity
                                style={styles.buttomPerfil}
                                onPress={() => {
                                    console.log('opa')
                                }}
                            >
                                <Text style={{ color: "#FFF" }}>Editar</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttomPerfil}
                                onPress={() => {
                                    console.log('opa')
                                }}
                            >
                                <Text style={{ color: "#FFF" }}>Configurações</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}