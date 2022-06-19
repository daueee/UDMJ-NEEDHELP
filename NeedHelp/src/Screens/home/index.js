import React from 'react'
import { View, Text, Button, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'


import styles from './style'
import stylesGeral from '../styleGeral'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
        accessible={false}>
        {children}
    </TouchableWithoutFeedback>


);

export function Home({ navigation }) {

    const [search, onChangeSearch] = React.useState();

    return (
        <ImageBackground
            source={require('../../../assets/Hi-fi/imagemFundo.png')}
            style={stylesGeral.imageFundo}
        >
            <View style={stylesGeral.screen}>
                <View style={stylesGeral.screenSecundaria}>
                    <View>
                        <DismissKeyboard>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeSearch}
                                value={search}
                                placeholder="Encontrar profissional"
                            />
                        </DismissKeyboard>
                    </View>
                    <View>
                        <Text style={styles.textHome}>Prestadores por categoria</Text>
                    </View>
                    <View style={styles.divButtom}>
                        <View>
                            <TouchableOpacity
                                style={styles.buttomHome}
                                onPress={() => {
                                    console.log('opa')
                                }}
                            >
                                <Text style={stylesGeral.text}>Editar</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttomHome}
                                onPress={() => {
                                    console.log('opa')
                                }}
                            >
                                <Text style={stylesGeral.text}>Editar</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttomHome}
                                onPress={() => {
                                    console.log('opa')
                                }}
                            >
                                <Text style={stylesGeral.text}>Configurações</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttomHome}
                                onPress={() => {
                                    console.log('opa')
                                }}
                            >
                                <Text style={stylesGeral.text}>Configurações</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttomHome}
                                onPress={() => {
                                    console.log('opa')
                                }}
                            >
                                <Text style={stylesGeral.text}>Configurações</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttomHome}
                                onPress={() => {
                                    console.log('opa')
                                }}
                            >
                                <Text style={stylesGeral.text}>Configurações</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}