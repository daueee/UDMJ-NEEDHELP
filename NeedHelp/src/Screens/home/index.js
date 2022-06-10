import React from 'react'
import {View, Text, Button, ImageBackground} from 'react-native'


import styles from './style'

const img = './adaptive-icon.png'

export function Home({ navigation }){

    // function openScreen(){
    //     navigation.navigate('cliente')
    // }

    return (
        <ImageBackground
                source={require('../../../assets/Hi-fi/00 Splash Screen – 1.png')}
                style={styles.imageFundo}
            >      
        <View style={styles.screen}>
            

            <Text style={styles.text}>
                Tela Home
            </Text>
            <Button
            title='Ir para a tela B'
            // onPress={openScreen}
            
            />
            
        </View>
        </ImageBackground>
    );
}