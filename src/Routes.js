import React, { Component } from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';


import Login from './pages/Login.js';

import Signup from './pages/Signup.js';

import DaftarGuru from './pages/DaftarGuru.js'

export default class Routes extends Component<{}> {

       
    render() {

        return(

        <Router>

            <Stack key="root" hideNavBar={true}>

            <Scene key="login" component={Login} title="Login" initial={true}/>

            <Scene key="signup" component={Signup} title="Register"/>

            <Scene key= "daftarguru" component = {DaftarGuru} title="Daftar Guru"/>

            </Stack>

        </Router>

        )

    }

}