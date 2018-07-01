import React, { Component } from 'react';
import { Row, Col, Text } from 'native-base';
import { Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SplashStyle from 'SplashStyle';
import withUser from 'withUser';
import { getUser, IMAGE_BASE_URL } from 'global';
import AppImages from 'AppImages';

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <ImageBackground source={AppImages.splashImage} style={[SplashStyle.fullScreen]}>
                    <Row style={SplashStyle.newAccountBtnRow}>
                        <Col>
                            <TouchableOpacity style={[SplashStyle.newAccountBtn]}
                                              onPress={()=>{Actions.register()}}>
                                <Text style={[SplashStyle.newAccountBtnTxt]}>
                                   Create New Account
                                </Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row style={SplashStyle.loginBtnRow}>
                        <Col>
                            <TouchableOpacity style={[SplashStyle.loginBtn]}
                                              onPress={()=>{Actions.login()}}>
                                <Text style={[SplashStyle.loginBtnTxt]}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </ImageBackground>
        );
    }
}

export default withUser(Splash);
