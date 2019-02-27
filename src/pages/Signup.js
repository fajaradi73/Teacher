import React, { Component } from 'react';

import {

    StyleSheet,

    Text,

    View,

    StatusBar ,

    TouchableOpacity

} from 'react-native';



import Logo from '../components/Logo';

import Form from '../components/FormDaftar';



import {Actions} from 'react-native-router-flux';



export default class Signup extends Component<{}> {

    goBack() {

    Actions.pop();
    }
    
    render() {

        return(

            <View style={styles.container}>

                <Logo/>

                <Form type="Daftar dengan Email">
                        
                </Form>

                <View style={styles.signupTextCont}>

                    <Text style={styles.signupText}>Sudah punya akun?</Text>

                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Masuk</Text></TouchableOpacity>

                </View>

            </View>

        )

    }

}



const styles = StyleSheet.create({

    container : {

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

