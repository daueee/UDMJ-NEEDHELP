import {StyleSheet, Dimensions,Keyboard} from 'react-native'

const stylesGeral = StyleSheet.create({
    screen: {
        justifyContent:'center',
        alignItems:'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    },
    screenSecundaria: {
        justifyContent:'center',
        width: Dimensions.get('window').width/'1.4',
        height: Dimensions.get('window').width,
    },
    text: {
        color: 'white'
    },
    imageFundo:{
        resizeMode:'cover',
        alignSelf: 'center',
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    buttom:{
        borderRadius: 10,
        alignItems: "center",
        width: '100%',
        backgroundColor: "#604412",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 30,
    },
    

})

export default stylesGeral