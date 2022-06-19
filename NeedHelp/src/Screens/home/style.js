import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    input:{
        height: 40,
        width: '100%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: "#FFF"
    },
    textHome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#604412",
    },
    buttomHome:{
        borderRadius: 10,
        alignItems: "center",
        width: 80,
        height: 80,
        backgroundColor: "#604412",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 30,
        flexDirection: 'row',
    },
    divButtom: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
    }
})

export default styles