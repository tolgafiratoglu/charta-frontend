import React from 'react';

import  { Redirect } from 'react-router-dom'

export default class HttpService extends React.Component {

    static getPrivateConfig() {
        let authToken = localStorage.getItem('jwtToken');

        if(authToken != null){

            var config = {
                headers: {'Authorization': "Bearer " + authToken}
            };


            return config;

        } else {
            return false;
        }

    }

    static redirectToLogin(history) {
        localStorage.setItem('jwtToken', '')

        // const history = createBrowserHistory()
        history.push("/login")
    }

    static isOnline() {
        return localStorage.getItem('jwtToken') ? true : false;
    }

    static getLanguageCode() {
        return localStorage.getItem('languageCode') ? localStorage.getItem('languageCode') : 'en'
    }

}