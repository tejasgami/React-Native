/**
 * @providesModule Loader
 */

import React, { Component } from 'react';
import { connect } from "react-redux";
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
import LayoutStyle from 'LayoutStyle';
import { View, Dimensions } from 'react-native';

class Loader extends Component {
    constructor() {
        super(...arguments);
    }

    componentWillReceiveProps({loader}) {
        if (loader == true) {
            loaderHandler.showLoader("Loading");
        } else {
            loaderHandler.hideLoader();
        }
    }

    render() {
        const { loader } = this.props;
        return (
            <View style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
                flex:1,
                position:'absolute',
                right:0,
                zIndex:999
            }}>
                <BusyIndicator loader={loader}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    loader: state.loader ? state.loader : false
});

export default connect(mapStateToProps)(Loader);
