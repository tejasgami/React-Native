import {
    NOTIFICATION_PUSH,
    NOTIFICATION_POP,
    LOADER_SET,
    GRID_SET,
    REGISTER_USER_SET,
    CURRENT_USER_SET,
} from "ReduxActions";

export const toast = (state = [], action) => {
    switch (action.type) {
        case NOTIFICATION_PUSH:
            return [...state, action.text];

        case NOTIFICATION_POP:
            return state.length > 0 ? state.slice(1) : state;

        default:
            return state;
    }
};

export const loader = (state = {}, action) => {
    switch (action.type) {
        case LOADER_SET:
            return action.state;

        default:
            return false;
    }
};

export const grid = (state = false, action) => {
    switch (action.type) {
        case GRID_SET:
            return action.state;

        default:
            return state;
    }
};

export const registerUser = (state = null, action) => {
    switch (action.type) {
        case REGISTER_USER_SET:
            return action.state;

        default:
            return state;
    }
};

export const currentUser = (state = null, action) => {
    switch (action.type) {
        case CURRENT_USER_SET:
            return action.user;

        default:
            return state;
    }
};
