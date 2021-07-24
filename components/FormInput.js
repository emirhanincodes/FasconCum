import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function FormInput({ labelValue, placeholderText, iconType, ...rest }) {
    return (
        <View style={styles.inputContainer}>
            <View styles={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color='#666' />
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberofLines={1}
                placeholder={placeholderText}
                placeholderTextColor='#666'
                {...rest}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer:{
        marginTop:5,
        marginBottom:10,
        widht:'100%',
        height: windowHeight / 15,
        borderColor: '#CCC',
        borderRadius:3,
        borderWidht:1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle:{
        padding:10,
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#CCC',
        borderRightWidht:1,
        widht:50
    },
    input:{
        padding:10,
        flex:1,
        fontSize:16,
        fontFamily: 'Lato-Regular',
        color:'#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField:{
        padding:10,
        marginTop:5,
        marginBottom:10,
        widht:windowHeight/1.5,
        height:windowHeight/15,
        fontSize:16,
        borderRadius:8,
        borderWidht:1
    }
})