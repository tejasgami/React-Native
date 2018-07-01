/**
 * @providesModule ReduxActions
 */

export const NOTIFICATION_PUSH = 'notification/PUSH';
export const NOTIFICATION_POP = 'notification/POP';
export const LOADER_SET = 'loader/SET';
export const LAST_ACTION_SET = 'lastAction/SET';
export const GRID_SET = 'grid/SET';
export const REGISTER_USER_SET = 'registerUser/SET';
export const CURRENT_USER_SET = 'currentUser/SET';

// action creators

export const notificationPush = text => ({
    type: NOTIFICATION_PUSH,
    text
});

export const notificationPop = () => ({
    type: NOTIFICATION_POP
});

export const loaderSet = state => ({
    type: LOADER_SET,
    state
});

export const lastActionSet = state => ({
    type: LAST_ACTION_SET,
    state
});

export const gridSet = state => ({
    type: GRID_SET,
    state
});

export const registerUserSet = state => ({
    type: REGISTER_USER_SET,
    state
});

export const currentUserSet = user => ({
    type: CURRENT_USER_SET,
    user
});