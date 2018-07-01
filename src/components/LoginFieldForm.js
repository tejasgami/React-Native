import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { emailRegex } from 'global';
import { Row, Col, Text } from 'native-base';
import { reduxForm } from 'redux-form';
import AppImages from 'AppImages';
import ReduxField from 'ReduxField';
import LoginStyle from 'LoginStyle';
import StyleConfig from 'StyleConfig';

class LoginFieldForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            passwordHidden: true
        }
    }

    render() {
        const { passwordHidden } = this.state;
        const { invalid, handleSubmit, onSubmit } = this.props;
        return(
            <Col>
                <Row style={LoginStyle.inputRow}>
                    <Col>
                        <ReduxField
                            name="email"
                            placeholder="Email"
                            style={LoginStyle.input}
                            changeSuccessColor={true}
                            placeholderTextColor={StyleConfig.black}
                            placeholderStyle={LoginStyle.placeholderMargin}
                            autoCapitalize="none"
                            autoCorrect={false}
                            showSideError={true}
                            leftSideComponent={
                                <TouchableOpacity style={LoginStyle.inputHiddenBtn}>
                                    <Image source={AppImages.inputMail} style={LoginStyle.icon} />
                                </TouchableOpacity>
                            }
                            infoIcon={<Image source={AppImages.arrowSign} style={LoginStyle.icon1} />}
                        />

                        <ReduxField
                            name="password"
                            placeholder="Password"
                            style={LoginStyle.input}
                            leftSideComponent={
                                <TouchableOpacity style={LoginStyle.inputLeftBtn}>
                                    <Image source={ AppImages.inputPassword } style={LoginStyle.icon} />
                                </TouchableOpacity>
                            }
                            showSideError={true}
                            secureTextEntry={passwordHidden}
                            infoIcon={<Image source={AppImages.arrowSign} style={LoginStyle.icon1} />}
                            autoCapitalize="none"
                            placeholderTextColor={StyleConfig.black}
                            autoCorrect={false}
                        />
                    </Col>
                </Row>
                <Row style={LoginStyle.loginRow}>
                    <Col>
                        <TouchableOpacity style={[LoginStyle.loginBtn,(invalid) ? LoginStyle.btnDisabled : LoginStyle.btnEnabled]}
                                          disabled={invalid}
                                          onPress={handleSubmit(onSubmit)}>
                            <Text style={[LoginStyle.loginBtnTxt, (invalid) ? LoginStyle.loginBtnTxtInValid : LoginStyle.loginBtnTxtValid]}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Col>
        )
    }
}

const validate = values => {
    let errors = {};
    errors.email = !values.email
        ? 'Invalid'
        : undefined;

    errors.password = !values.password
        ? 'Password Required'
        : undefined;
    return errors;
};

const initialState = {
    email:'',
    password:''
};

const withForm = reduxForm({
    form: 'loginForm',
    validate,
    initialValues: initialState
});

export default withForm(LoginFieldForm);
