import {StyleSheet, Dimensions,Keyboard} from 'react-native'

const styles = StyleSheet.create({
    screen: {
        justifyContent:'center',
        alignItems:'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    },
    screenSecundaria: {
        justifyContent:'center',
        width: Dimensions.get('window').width/'1.5',
        height: Dimensions.get('window').width,
    },
    text: {
        color: 'white'
    },
    imageFundo:{
        resizeMode:'stretch',
        alignSelf: 'center',
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttom:{
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#604412",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 30,
    },
    logoNeedHelp:{
        alignSelf:'center',
        marginTop:125,
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    input:{
        height: 40,
        width: '100%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 5
    },
    textPassword:{
        marginTop: 10,
        color: "#604412",
        textAlign: "right",
    },
    textNewAccount:{
        marginTop:60,
        textAlign: "center",
        color: "#604412",
    }

})

export default styles