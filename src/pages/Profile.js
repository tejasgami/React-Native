import React, {Component} from 'react';
import {Content, Grid, Row, Text, Col, Label} from 'native-base';
import {storeUser, emailRegex, numberRegex} from 'global';
import LayoutStyle from 'LayoutStyle';
import ProfileStyle from 'ProfileStyle';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withRegisterUser from 'withRegisterUser';
import withUser from 'withUser';
import AppImages from 'AppImages';
import {Image, View} from 'react-native';
import StyleConfig from 'StyleConfig';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        const {user} = this.props;
        const {userData: {data}} = user;
        return (
            <Content style={LayoutStyle.container}>

                <View style={ProfileStyle.firstGrid}>
                    <View style={ProfileStyle.thumbnailRow}>
                        <Image source={AppImages.defaultUserImage} style={ProfileStyle.thumbnail}/>
                    </View>
                </View>
                <Grid>
                    <Row style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: StyleConfig.navyLight
                    }}>
                        <Col>
                            <Label style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: StyleConfig.navyLight
                            }}>{data.displayname}</Label>
                        </Col>
                    </Row>
                    <Row style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: StyleConfig.navyLight
                    }}>
                        <Col>
                            <Label style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: StyleConfig.navyLight
                            }}>{data.country_code}{data.phone_no}</Label>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default withUser(withToast(withLoader(withRegisterUser(Profile))));
