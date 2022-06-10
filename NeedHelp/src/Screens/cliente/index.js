import React from 'react'
import {View, Text, ImageBackground} from 'react-native'

import styles from './style'

export function Cliente(){
    

    return (
        <ImageBackground
                source={require('../../../assets/Hi-fi/00 Splash Screen – 1.png')}
                style={styles.imageFundo}
            >      
            <View style={styles.screen}>
                <Text style={styles.text}>
                    Tela Cliente
                </Text>
            
            </View>
        </ImageBackground>
    );
}