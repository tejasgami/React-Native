/**
 * @providesModule withLoader
 */

import { connect } from "react-redux";
import { loaderSet } from "ReduxActions";

const mapDispatchToProps = dispatch => ({

    loader: state => {
        console.log("loader--",state.loader);
        dispatch(loaderSet(state));
    }
});

const mapStateToProps = state => ({
    loaderState: state.loader ? state.loader : false
});

export default connect(mapStateToProps,mapDispatchToProps);
