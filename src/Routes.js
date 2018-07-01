import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Splash from './pages/Splash';
import NavBar from './components/NavBar';

export default () => (
    <Router>
        <Scene key="root">
            <Scene type="replace" key="splash" component={Splash} initial panHandlers={null} hideNavBar={true}  navBar={() => <NavBar back="login"/>} />
            <Scene type="replace" key="login" component={Login} panHandlers={null} hideNavBar={false} navBar={() => <NavBar back="register" name="Login"/>} />
            <Scene type="replace" key="register" component={Register} panHandlers={null} hideNavBar={false} navBar={() => <NavBar back="login" name="Register"/>}/>
            <Scene type="replace" key="profile" component={Profile} panHandlers={null} hideNavBar={false} navBar={() => <NavBar back="login" name="Profile" />} />
        </Scene>
    </Router>
);
