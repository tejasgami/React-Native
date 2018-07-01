import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { storeUser, emailRegex, numberRegex, getCountry, getState, getCity } from 'global';
import { reduxForm, change } from 'redux-form'
import AppImages from 'AppImages';
import ReduxField from 'ReduxField';
import RegisterStyle from 'RegisterStyle';
import { Row, Col, Text } from 'native-base';
import StyleConfig from 'StyleConfig';

class RegisterFieldForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passwordHidden: true,
        };
    }

    _handleSubmit = (formData) => {
        const { onSubmit } = this.props;
        const formDataMix = Object.assign(formData);
        onSubmit(formDataMix);
    }

    render(){
        const { handleSubmit, invalid } = this.props;
        const { passwordHidden } = this.state;

        return(
            <Col style={[RegisterStyle.mainCol]}>
                <Row>
                    <Col>
                        <ReduxField
                            name="displayname"
                            placeholder="Name"
                            style={RegisterStyle.registerFormInput}
                            placeholderTextColor={StyleConfig.black}
                            autoCapitalize="none"
                            autoCorrect={false}
                            showSideError={true}
                            autoFocus={true}
                            leftSideComponent={
                                <TouchableOpacity style={RegisterStyle.inputHiddenBtn}>
                                    <Image source={AppImages.userIcon} style={RegisterStyle.icon} />
                                </TouchableOpacity>
                            }
                        />
                        <ReduxField
                            name="email"
                            placeholder="Email"
                            style={RegisterStyle.registerFormInput}
                            placeholderTextColor={StyleConfig.black}
                            autoCapitalize="none"
                            autoCorrect={false}
                            showSideError={true}
                            leftSideComponent={
                                <TouchableOpacity style={RegisterStyle.inputHiddenBtn}>
                                    <Image source={AppImages.inputMail} style={RegisterStyle.icon} />
                                </TouchableOpacity>
                            }
                        />
                        <Row>
                            <Col style={RegisterStyle.countryCodeCol}>
                                <ReduxField
                                    name="country_code"
                                    placeholder="Country"
                                    keyboardType='numeric'
                                    maxLength={4}
                                    style={[RegisterStyle.registerFormInput,RegisterStyle.countryCode]}
                                    placeholderTextColor={StyleConfig.black}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    showSideError={true}
                                    leftSideComponent={
                                        <TouchableOpacity style={RegisterStyle.inputHiddenBtn}>
                                            <Image source={AppImages.mobile} style={RegisterStyle.icon} />
                                        </TouchableOpacity>
                                    }
                                />
                            </Col>
                            <Col style={{width:'5%'}}></Col>
                            <Col style={RegisterStyle.phoneInputCol}>
                                <ReduxField
                                    name="phone_no"
                                    placeholder="Phone"
                                    keyboardType='numeric'
                                    maxLength={10}
                                    style={[RegisterStyle.registerFormInput,RegisterStyle.phoneInput]}
                                    placeholderTextColor={StyleConfig.black}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    showSideError={true}
                                />
                            </Col>
                        </Row>
                        <ReduxField
                            name="password"
                            placeholder="Password"
                            style={RegisterStyle.registerFormInput}
                            placeholderTextColor={StyleConfig.black}
                            autoCapitalize="none"
                            autoCorrect={false}
                            showSideError={true}
                            secureTextEntry={passwordHidden}
                            leftSideComponent={
                                <TouchableOpacity style={RegisterStyle.inputLeftBtn}>
                                    <Image source={ AppImages.inputPassword } style={RegisterStyle.icon} />
                                </TouchableOpacity>
                            }
                        />
                    </Col>
                </Row>
                <Row style={RegisterStyle.signupButtonRow}>
                    <Col>
                        <TouchableOpacity onPress={handleSubmit(this._handleSubmit)}
                                          disabled={invalid}
                                          style={[RegisterStyle.signupButton,(invalid) ? RegisterStyle.btnDisabled : RegisterStyle.btnEnabled]}>
                            <Text style={[RegisterStyle.signupButtonText, (invalid) ? RegisterStyle.signupBtnTxtInValid : RegisterStyle.signupBtnTxtValid]}>Sign Up</Text>
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
        ? 'Email Required'
        : !emailRegex.test(values.email)
            ? 'Invalid'
            : undefined;

    errors.password = !values.password
        ? 'Required'
        : (values.password.length < 8)
            ? '8 character minimum'
            : undefined;

    errors.displayname = !values.displayname
        ? 'Required'
        : undefined;

    errors.country_code = !values.country_code
        ? 'Required'
        : undefined;

    errors.phone_no = !values.phone_no
        ? 'Required'
        : values.phone_no.length < 10
            ? '10 digits minimum'
            : undefined;

    return errors;
};

const initialState = {
    displayname:'',
    country_code:'',
    phone_no:'',
    email:'',
    password:'',
};

const withForm = reduxForm({
    form: 'registerForm',
    initialValues: initialState,
    validate,
});

export default withForm(RegisterFieldForm);
