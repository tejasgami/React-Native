import React, {Component} from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Content, Label, Grid, Row, Col, Button, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withUser from 'withUser';
import { storeUser } from 'global';
import AppImages from 'AppImages';
import LoginFieldForm from '../components/LoginFieldForm';
import LoginStyle from 'LoginStyle';
import LayoutStyle from 'LayoutStyle';
import API from 'AppUtils';
import StyleConfig from 'StyleConfig';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    _appLogin = async () => {
        const { toast, setUser, loader } = this.props;
        loader(true);
        await API.profile().then((res) => {
            const { success } = res;
            loader(false);
            if (!success) {
                toast({text: "Invalid Token", type: 'danger'});
            } else {
                const userData = { data:{user_id, displayname, email, phone_no} } = res;
                storeUser({userData},...{userData});
                setUser({userData},...{userData});
                toast({text: 'Login success', type: 'success'});
                Actions.profile();
            }
        });

    }

    _doLogin = async (loginData) => {
        const { loader, toast, setUser } = this.props;
        loader(true);
        await API.login(loginData).then((res) => {
            const { success } = res;
            loader(false);
            if (!success) {
                const { message } = res;
                toast({text: message, type: 'danger'});
            } else {
                const { token } = res;
                const userData = {"Token":token};
                storeUser(userData);
                setUser(userData);
                this._appLogin( token );
            }
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Content style={LayoutStyle.rootContainer} scrollEnabled={false}>
                    <Grid style={LayoutStyle.mainGrid}>
                        <Row style={LoginStyle.gridRow}>
                            <Col>
                                <Row>
                                    <Col style={LoginStyle.logoCol}>
                                        <Image source={AppImages.logo} style={[LayoutStyle.logo, { marginBottom: StyleConfig.countPixelRatio(70) }]} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={LoginStyle.gridInputRow}>
                            <Col>
                                <LoginFieldForm {...this.props} onSubmit={this._doLogin.bind(this)}/>
                            </Col>
                        </Row>
                    </Grid>

                        <Row style={LoginStyle.forgotLinkRow}>
                            <Col style={LoginStyle.forgotTextCol}>
                                <Text style={LoginStyle.signUpBtnLabel}>Forgot Password ?</Text>
                            </Col>
                        </Row>
                        <Row style={LoginStyle.signupLinkRow}>
                            <Col style={LoginStyle.signUpTextCol}>
                                <Text style={LoginStyle.signUpBtnLabel}>Not a member yet?
                                    <Text style={LoginStyle.signUpBtnTxt} onPress={() => Actions.register()}>
                                        &nbsp; Sign up
                                    </Text>
                                </Text>
                            </Col>
                        </Row>
                </Content>
            </View>
        );
    }
}

export default withUser(withToast(withLoader(Login)));
