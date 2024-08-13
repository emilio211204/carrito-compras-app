import {StyleSheet} from 'react-native';
import { INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../commons/constants';

//gestionar los estilos de la app
export const styles = StyleSheet.create({
    globalTitle: {
        color: SECONDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 20,
        fontWeight: 'bold',
        marginTop: 40
    },
    contenBody: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    titleHearderBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },

    textBody: {
        fontSize: 15,
        color: 'black',
    },

    inputText: {
        backgroundColor:INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },

    contenInput: {
        marginTop: 30,
        gap: 10,
        
    },

    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: '50%',
        alignSelf: 'center'
    },

    buttonText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',
    },

    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        top: 10
    },

    textRegister: {
        textAlign: 'center',
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20
    },
    iconTrash:{ 
        position: 'absolute', 
        right: 15, 
        color: 'red', 
        opacity: 0.5 
    }, 
    textRedirection:{ 
        textAlign: 'center', 
        gap: 10, 
        fontSize: 16, 
        marginTop: 10, 
        fontWeight: 'bold', 
        color: '#75b3f2' 
    }, 
    contentCard:{ 
        backgroundColor: '#d9f2f9', 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderRadius: 30, 
        borderColor: '#ccc', 
        borderWidth: 2, 
        padding: 10, 
        marginBottom: 15, 
        borderStyle: 'solid', 
         
    }, 
    titleCard:{ 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'black', 
        marginLeft: 15 
    }, 
    imageCard:{ 
        width: 70, 
        height: 70, 
        borderRadius: 10 
         
    }, 
    priceCard:{ 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#f59c0c', 
        marginLeft: 10, 
        marginBottom: 5 
    }, 
    iconCard:{ 
        marginLeft: 'auto' 
    },

    modal: {
        flex: 1,
        margin: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:SECONDARY_COLOR,
        borderRadius: 30
    }


})
