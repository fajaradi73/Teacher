import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Logo extends Component<{}>{

    daftarguru(){
        Actions.daftarguru()
    }
    
    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity style ={styles.button}>   
                    <TouchableOpacity onPress={this.daftarguru}><Text style = {styles.buttonText}>{this.props.type}</Text></TouchableOpacity>
                </TouchableOpacity>
                <Text style={styles.pilihan}>Atau Daftar dengan :</Text>

                <TouchableOpacity style={[styles.buttonContainer, styles.facebookButton]}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}> Daftar dengan facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}> Daftar dengan Google</Text>
                    </View>
                </TouchableOpacity>
                
            </View>         
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    restoreButtonContainer:{
        width:250,
        marginBottom:15,
        alignItems: 'flex-end'
    },
    icon:{
        width:30,
        height:30,
    },
    inputIcon:{
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:8,
        marginVertical:10
    },
    facebookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    lupaText: {
        textAlign:'right',
        alignSelf:'stretch',
        color:'#000000',
        fontSize:16
    },
    pilihan: {
        textAlign:'left',
        alignSelf:'stretch',
        color:'#000000',
        fontSize:16,
        marginVertical:20
    },
    inputbox : { 
        width :300,
        backgroundColor:'rgba(255,255,255,0.4)',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color:'#000000',
        marginVertical: 10
    },
    button : {
        width:300,
        backgroundColor:'#40bfe8',
        borderRadius: 8,
        marginVertical: 10,
        paddingVertical: 13
    },
    loginText: {
        color: 'white',
    },
    buttonText :  {
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign:'center'
    },
    socialButtonContent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    socialIcon:{
        color: "#FFFFFF",
        marginRight:5
    }
});