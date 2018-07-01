/**
 * @providesModule global
 */

import { AsyncStorage, Dimensions, Platform } from 'react-native';
import { currentUserSet } from "ReduxActions";


export const WINDOW = Dimensions.get('window');

export const STORAGE_PATH = Platform.OS === 'android' ? 'file://' : '';

export const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet';

export const size = Dimensions.get('window');

export const API_BASE_URL = 'http://www.domain.com';

export const USER_CREDENCIALS = '';

export const USER_STORAGE_KEY = 'USER_DATA';

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const numberRegex = /^\d+$/;

export const storeUser = user => {
    AsyncStorage.setItem(USER_STORAGE_KEY,JSON.stringify(user));
}

export const getUser = async () => JSON.parse(await AsyncStorage.getItem(USER_STORAGE_KEY));

export const getAuthToken = async (forAPICall = false) => {
    if(JSON.parse(await AsyncStorage.getItem(USER_STORAGE_KEY))) {
        return JSON.parse(await AsyncStorage.getItem(USER_STORAGE_KEY)).Token;
    } else {
        return USER_CREDENCIALS;
    }
}

export const queryString = (obj) => {
    var str = [];
    for(var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

export const doStringFormat = (mask,reference) => {
    let newReference = mask;
    let ignoreCount = 0;
    for (let n=0; n<reference.length; n++) {
        if (reference.charAt(n) != mask.charAt(n)) {
            newReference = newReference.replace('X',reference.charAt(n));
            mask.charAt(n) != 'X' && ignoreCount++;
        }
    }
    newReference = newReference.substr(0,reference.length + ignoreCount);
    return newReference;
}

export const convertFormData = async (data) => {

    var formData = new FormData();

    for (var k in data) {
        formData.append(k, data[k]);
    }
    return formData;
}
