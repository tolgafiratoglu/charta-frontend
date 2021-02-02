import axios from "axios";
import routeConfig from "../config/route";

export const loginService = (username, password) => {

        return axios.post(
            routeConfig.get('apiUrl') + routeConfig.get('apiRequests.login'), 
            {
                "username": username, 
                "password": password
            }
        ).then(
            (response) => {
                if(response.access) {
                    // Set JWT token:
                    localStorage.setItem('jwtToken', response.access) // Set jwtToken
                    localStorage.setItem('refreshToken', response.refresh) // Set refreshToken
                    return {'status': 'success', 'data': {'token': response.access}}
                }else{
                    return {'status': 'error', 'error': 'response'}
                }
            }
        ).catch(
            (response) => {
                return {'status': 'error', 'error': 'response'}
            }
        );

}