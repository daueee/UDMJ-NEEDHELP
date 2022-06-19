import {StyleSheet} from 'react-native'
import { block } from 'react-native-reanimated'

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#604412',   
        justifyContent:'center', 
        fontWeight: 'bold'
    },
    textInformacoes: {
        fontSize: 15,
        color: '#604412',   
        justifyContent:'center', 
    },
    textoPerfilInicial: {
        alignItems:'center',
        paddingBottom: 40,
        marginTop: 250
    },
    textoPerfil: {
        alignItems:'center',
        paddingBottom: 40,
        
    },
    circuloImage: {
        borderRadius: 100,
        alignItems: "center",
        width: 150,
        height: 150,
        backgroundColor: "#FFF",
        paddingTop: 23,
        paddingBottom: 14,
        marginBottom: 20
        // marginTop: 250,
    },
    iconPeople:{
        marginTop: 25,
        alignSelf:'center',
        width: 65,
        height: 55,
        resizeMode: 'contain',
    },
    inforcacoesContratos:{
        display: 'flex'
    },
    textHistoricoPerfil: {
        display: 'inline-block',
        alignItems:'center',
        justifyContent: 'center',

    },
    historicoPerfil: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttomPerfil:{
        borderRadius: 10,
        alignItems: "center",
        width: 130,
        backgroundColor: "#604412",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 30,
    },
    divButtom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default styles