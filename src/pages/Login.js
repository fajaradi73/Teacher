import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,

StatusBar ,

TouchableOpacity

} from 'react-native';



import Logo from '../components/Logo';

import Form from '../components/FormLogin';



import {Actions} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';



export default class Login extends Component<{}> {

    signup() {

        Actions.signup()

    }
    componentDidMount() {
            SplashScreen.hide();
        }



    render() {

        return(

        <View style={styles.Container}>

            <Logo/>

            <Form type="Login"/>

            <View style={styles.signupTextCont}>

                <Text style={styles.signupText}>Tidak punya akun?</Text>

                <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Buat akun</Text></TouchableOpacity>

            </View>

        </View>

        )

    }

}



const styles = StyleSheet.create({

    Container : {

        backgroundColor:'#FFFFFF',

        flex: 1,

        alignItems:'center',

        justifyContent :'center'

    },

    signupTextCont : {

        flexGrow: 1,

        alignItems:'flex-end',

        justifyContent :'center',

        paddingVertical:16,

        flexDirection:'row'

    },

    signupText: {

        color:'#e0e0e0',

        fontSize:16

    },

    signupButton: {

        color:'#000000',

        fontSize:16,

        fontWeight:'500'

    }

});