/**
 * @providesModule MainContainer
 */

import React, { Component, AsyncStorage } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import withLoader from 'withLoader';
import Toast from 'Toast';
import Loader from 'Loader';
import LayoutStyle from 'LayoutStyle';
import withGrid from 'withGrid';
import GridView from 'GridView';
import withUser from 'withUser';
import withToast from 'withToast';
import { getUser } from 'global';

class MainContainer extends Component {

    constructor() {
        super();
        //Disable yellow warning message
        console.disableYellowBox = true;
    }

    async componentWillMount() {
        const { setUser } = this.props;
        setUser(await getUser());
    }

    _handelGrid = () => {
        const { grid, gridSet } = this.props;
        gridSet(!grid);
    }

    render() {
        const { loaderState, grid } = this.props;
        return (
            <TouchableWithoutFeedback onLongPress={this._handelGrid.bind(this)} >
                <View style={((loaderState == true)) ? LayoutStyle.mainContainerWithLoader : LayoutStyle.mainContainer}>
                    {
                        grid && <GridView />
                    }
                    <Loader />
                    <Toast />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default withUser(withLoader(withToast(withGrid(MainContainer))));
