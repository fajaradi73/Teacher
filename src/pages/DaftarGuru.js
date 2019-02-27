import React, { Component } from 'react';

import {

    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ToolbarAndroid,
    TextInput,
    Dimensions,
    Image

} from 'react-native';

import {TextInputLayout} from 'rn-textinputlayout';


import Logo from '../components/Logo';

import {Actions} from 'react-native-router-flux';
import Toolbar from '../../lib/Toolbar'
import { getColor } from '../../lib/helpers'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Signup extends Component<{}> {

    goBack() {

    Actions.pop();

}
    
    render() {

        return(
            
            <View style={styles.container}>
                <StatusBar
                        backgroundColor="#f0f0f0"
                        barStyle= "dark-content"
                    />
                <View style = {styles.containerToolbar}>    
                    <TouchableOpacity onPress={this.goBack}>
                        <Image style={styles.icon} source={require('../images/left_arrow.png')}/>
                    </TouchableOpacity>
                    <View style = {styles.containerText}>
                        <Text style={styles.loginText}>Daftar Guru</Text>
                    </View>
                </View>
                <View style = {styles.containerView}>
                <TextInputLayout style = {styles.inputbox}>
                    <TextInput style = {styles.textInput}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        placeholder = {'Nama'}
                        placeholderTextColor = "#ffffff"
                        hintColor = "#ffffff"
                        selectionColor = "#fff"
                        keyboardType = "default"
                        onSubmitEditing={() => this.password.focus()}
                        />
                </TextInputLayout>
                <TextInputLayout style = {styles.inputbox}>
                    <TextInput style = {styles.textInput}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        placeholder = {'Email'}
                        placeholderTextColor = "#ffffff"
                        selectionColor = "#fff"
                        hintColor = "#ffffff"
                        keyboardType = "email-address"
                        onSubmitEditing={() => this.password.focus()}
                        />
                </TextInputLayout>
                <TextInputLayout style = {styles.inputbox}>
                    <TextInput style = {styles.textInput}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        placeholder = {'Nomor Induk Pegawai'}
                        placeholderTextColor = "#ffffff"
                        selectionColor = "#fff"
                        hintColor = "#ffffff"
                        keyboardType = "number-pad"
                        onSubmitEditing={() => this.password.focus()}
                        />
                </TextInputLayout>
                <TextInputLayout style = {styles.inputbox}>
                    <TextInput style = {styles.textInput}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        placeholder = {'Nomor Ponsel'}
                        placeholderTextColor = "#ffffff"
                        selectionColor = "#fff"
                        hintColor = "#ffffff"
                        keyboardType = "phone-pad"
                        onSubmitEditing={() => this.password.focus()}
                        />
                </TextInputLayout> 
                <TextInputLayout style = {styles.inputbox}>
                    <TextInput style = {styles.textInput}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            placeholder = {'Kata sandi'}
                            placeholderTextColor = "#ffffff"
                            selectionColor = "#fff"
                            hintColor = "#ffffff"
                            secureTextEntry={true}
                            ref={(input) => this.password = input}
                            />
                </TextInputLayout>
                <TextInputLayout style = {styles.inputbox}>
                    <TextInput style = {styles.textInput}
                            underlineColorAndroid = 'rgba(0,0,0,0)'
                            placeholder = {'Konfirmasi kata sandi'}
                            placeholderTextColor = "#ffffff"
                            selectionColor = "#fff"
                            hintColor = "#ffffff"
                            secureTextEntry={true}
                            ref={(input) => this.password = input}
                            />
                </TextInputLayout>
                <TouchableOpacity style ={styles.button}>   
                    <Text style = {styles.buttonText}>Daftar</Text>
                </TouchableOpacity>  
                </View>      
            </View>

        )

    }

}



const styles = StyleSheet.create({

    container : {

        backgroundColor:'#40bfe8',
        flexGrow: 1
    },
    containerToolbar:{
        backgroundColor:'#40bfe8',
        alignItems:'flex-start',
        flexDirection:"row"
    },
    containerView: {
        backgroundColor:'#FFFFFF',
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    containerText: {
        backgroundColor:'#40bfe8',
        flexGrow: 2,
        alignItems: 'flex-start',
        margin:10
    },
    icon:{
        width:30,
        height:30,
        margin:10
    },
    inputbox : { 
        width: 350,
        backgroundColor:'#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color:'#ffffff',
        marginVertical: 10,
        marginEnd: 20,
        marginStart: 20,
        marginTop : 10,
        tintColor: '#ffffff'
    },
    signupTextCont : {
        flexGrow: 1,
        backgroundColor : "#40bfe8",
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },

    signupText: {

        color:'rgba(255,255,255,0.6)',

        fontSize:16

    },
    button : {
        width:300,
        backgroundColor:'#40bfe8',
        borderRadius: 8,
        marginVertical: 20,
        paddingVertical: 13
    },
    loginText: {
        color: 'white',
        fontSize:20
    },
    buttonText :  {
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign:'center'
    },
    signupButton: {

        color:'#ffffff',

        fontSize:16,

        fontWeight:'500'

    },
    textInput: {
        fontSize: 16,
        color : '#000000',
        height: 40,
        paddingBottom:10,

    },
    inputLayout: {
        marginTop: 16,
        marginHorizontal: 36
    }

});

