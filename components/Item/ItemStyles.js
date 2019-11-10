import  {StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    body:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
        flex: 1,
        marginBottom: 10,
        borderWidth: 1,
        flexWrap:'wrap'
    },

    textInput: {
        width: 300,
        flexDirection: 'row',
        justifyContent:'space-around',
        flexWrap: 'wrap'
    },

    img: {
        height: 20,
        width: 20
    }

});