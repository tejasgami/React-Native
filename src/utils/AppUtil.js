/**
 * @providesModule AppUtils
 */

import { API_BASE_URL, getAuthToken, queryString, convertFormData, userLogout, APP_SECRET, APP_KEY } from 'global';


const isTokenExpire = async (responseJson) => {
    if (typeof responseJson == 'string' && responseJson.includes('token')) {
        userLogout();
        return false;
    }
    return responseJson;
}

const AppUtils = {

    login : async function(data) {
        return fetch(API_BASE_URL+'user/auth.php?action=login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json());
    },
    profile:async function() {
        console.log("hh--",await getAuthToken());
        return fetch(API_BASE_URL+'user/manage.php?action=get-profile', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Token': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    register : async function(data) {
        console.log("DATA---",data);
        return fetch(API_BASE_URL+'user/auth.php?action=signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json());
    }
}

module.exports = AppUtils;
