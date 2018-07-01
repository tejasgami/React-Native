import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Header, Body, Left, Right, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import withUser  from 'withUser';
import NavBarStyle from 'NavBarStyle';
import AppImages from 'AppImages';
import StyleConfig from 'StyleConfig';

class NavBar extends Component {

    _toggleDrawer = () => {
        if(Actions.currentScene == 'DrawerOpen') {
            Actions.drawerClose();
        } else {
            Actions.drawerOpen();
        }
    }


    render () {
        const { back, user, name } = this.props;

        return (
            <Header style={[NavBarStyle.header,name=='Profile'?NavBarStyle.bgProfileColor:NavBarStyle.bgColor]}>
                <Left>
                    {
                        typeof back != 'undefined' && <TouchableOpacity onPress={() => Actions[back]()}>
                            <Icon name='chevron-left' style={NavBarStyle.backIcon} size={StyleConfig.headerIcon} color={StyleConfig.white} />
                        </TouchableOpacity>
                    }
                </Left>
                <Body style={NavBarStyle.headerBody}>
                    <Text style={[NavBarStyle.headerText]}>{ (name == 'Profile' && user !== null)?user.userData.data.displayname:name }</Text>
                </Body>
                <Right style={NavBarStyle.rightContainer}>
                    {
                        (user === null && user !== null) && <TouchableOpacity onPress={() =>  this._toggleDrawer()}>
                            <Icon name='menu' size={StyleConfig.headerIcon} color={StyleConfig.navyLight} />
                        </TouchableOpacity>
                    }
                </Right>
            </Header>
        );
    }
}

export default withUser(NavBar);
