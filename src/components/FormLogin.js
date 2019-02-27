import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';

import {TextInputLayout} from 'rn-textinputlayout';

export default class Logo extends Component<{}>{
    render(){
        return(
            <View style = {styles.container}>
            <StatusBar
                    backgroundColor="#f0f0f0"
                    barStyle= "dark-content"
                    animated={true}
                />
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
                            placeholder = {'Kata sandi'}
                            placeholderTextColor = "#ffffff"
                            selectionColor = "#fff"
                            hintColor = "#ffffff"
                            secureTextEntry={true}
                            ref={(input) => this.password = input}
                            />
                </TextInputLayout>
                <TouchableOpacity style={styles.restoreButtonContainer}>
                    <Text style={styles.lupaText}>Lupa kata sandi?</Text>        
                </TouchableOpacity>        
            
                <TouchableOpacity style ={styles.button}>   
                    <Text style = {styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
                <Text style={styles.pilihan}>Atau masuk dengan :</Text>

                <TouchableOpacity style={[styles.buttonContainer, styles.facebookButton]}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}> Masuk dengan facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
                    {/* <View style={styles.socialButtonContent}> */}
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}> Masuk dengan Google</Text>
                    {/* </View> */}
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
        marginVertical:20,
        marginStart: 30

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
    },
    textInput: {
        fontSize: 16,
        color : '#000000',
        height: 40,
        paddingBottom:10,

    }
});