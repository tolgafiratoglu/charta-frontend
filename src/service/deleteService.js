import axios from "axios";
import config from "../config/system";

import HttpService from "./httpService"

const deleteService = (urlContext, getRequestData, authorizationHeader) => {

        var authHeader = {}
        if(authorizationHeader == true){
            var jwtToken = HttpService.getPrivateConfig()
            if(jwtToken != false){
                authHeader = jwtToken
            }
        }

        return axios.delete(
            config.get('apiUrl') + config.get('apiRequests.' + urlContext) + "?" + getRequestData
        ).then(
            (response) => {
                if(response.data) {
                    return {'status': 'success', 'data': response.data}
                }else{
                    return {'status': 'error', 'error': 'post.failed'}
                }
            }
        ).catch(
            (response) => {
                return {'status': 'error', 'error': response}
            }
        );

}

export default deleteService