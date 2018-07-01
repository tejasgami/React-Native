/**
 * @providesModule ReduxStore
 */

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from 'redux-form';
import { toast, currentUser, loader, grid, registerUser } from './reducers';

const store = createStore(
    combineReducers({
        toast,
        loader,
        grid,
        registerUser,
        currentUser,
        form: formReducer
    }),
    compose(
        applyMiddleware(),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
