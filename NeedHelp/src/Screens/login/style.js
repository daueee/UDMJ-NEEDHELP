import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        width: "100vw",
        alignItems: 'center'
    },
    screenSecundaria: {
        width: 250,
        marginTop: "8%",
    },
    text: {
        color: 'white'
    },
    imageFundo:{
        resizeMode:"cover",
        width: "100",
        height: "100vh"
    },
    buttom:{
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
        backgroundColor: "#604412",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 30,
    },
    logoNeedHelp:{
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
    },
    input:{
        height: 40,
        width: "100%",
        borderWidth: 1,
        padding: 10,
        borderRadius: "10px",
        marginTop: "5px"
    },
    textPassword:{
        marginTop: "10px",
        color: "#604412",
        textAlign: "right",
    },
    textNewAccount:{
        marginTop:"60px",
        textAlign: "center",
        color: "#604412",
    }

})

export default styles