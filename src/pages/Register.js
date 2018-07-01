import React, { Component } from 'react';
import { Content, Grid, Row, Col, Label, Button, Text,View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { storeUser, emailRegex, numberRegex } from 'global';
import LayoutStyle from 'LayoutStyle';
import RegisterStyle from 'RegisterStyle';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withRegisterUser from 'withRegisterUser';
import RegisterFieldForm from '../components/RegisterFieldForm';
import API from 'AppUtils';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    _onSubmit = (formData) => {
        const { loader, toast } = this.props;
        loader(true);
        API.register(formData).then((res) => {
            const { success } = res;
            loader(false);
            if (!success) {
                toast({text: 'invalid', type: 'danger'});
            } else {
                const { toast } = this.props;
                toast({text:'You have register successfully', type:'success'});
                Actions.login();
            }
        });
    }

    render () {
        const { registerUser } = this.props;
        const registerFieldForm = {
            initialValues:registerUser
        };
        return (
            <Content style={LayoutStyle.container}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row>
                        <Col>
                            <RegisterFieldForm {...this.props} {...registerFieldForm} onSubmit={this._onSubmit.bind(this)} />
                        </Col>
                    </Row>
                    <Row style={RegisterStyle.signUpRow}>
                        <Col style={RegisterStyle.signUpTextCol}>
                            <Text style={RegisterStyle.signUpBtnLabel}>Already Member ?
                                <Text style={RegisterStyle.signUpBtnTxt} onPress={() => Actions.login()}>
                                    &nbsp; Login
                                </Text>
                            </Text>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default withToast(withLoader(withRegisterUser(Register)));
