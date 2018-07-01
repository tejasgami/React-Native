/**
 * App
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import store from 'ReduxStore';
import MainContainer from 'MainContainer';
import Routes from "./Routes";
import LayoutStyle from 'LayoutStyle';
import { getUser } from 'global';

class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Provider store={ store }>
                <StyleProvider style={getTheme(material)}>
                    <View style={LayoutStyle.rootContainer}>
                        <MainContainer />
                        <Routes />
                    </View>
                </StyleProvider>
            </Provider>
        );
    }
}

export default App;