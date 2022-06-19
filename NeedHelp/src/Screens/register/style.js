import {StyleSheet, Dimensions,Keyboard} from 'react-native'

const styles = StyleSheet.create({
    input:{
        height: 40,
        width: '100%',
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        marginTop: 5
    },
    formulario:{
        marginTop: 70            
    },
    textAcessar:{
        marginTop: 10,
        color: "#604412",
        textAlign: "right",
    },
    circuloImage: {
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 150,
        backgroundColor: "#FFF",
        paddingTop: 23,
        paddingBottom: 14,
        marginTop: 250,
    },
    iconPeople:{
        marginTop: 45,
        alignSelf:'center',
        width: 65,
        height: 55,
        resizeMode: 'contain',
    },
    iconSeta:{
        marginLeft: 20,
        alignSelf: 'flex-end',
        width: 55,
        height: 45,
        resizeMode: 'contain',
    }

})

export default styles