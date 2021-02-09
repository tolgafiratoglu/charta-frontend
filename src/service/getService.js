import axios from "axios";
import config from "../config/system";

import HttpService from "./httpService"

const getService = (urlContext, getRequestData, authorizationHeader) => {

        var authHeader = {}
        if(authorizationHeader == true){
            var jwtToken = HttpService.getPrivateConfig()
            if(jwtToken != false){
                authHeader = jwtToken
            }
        }

        return axios.get(
            config.get('apiUrl') + config.get('apiRequests.' + urlContext) + "?" + getRequestData,
            authHeader
        ).then(
            (response) => {
                console.log("response", response)
                if(response.data != "undefined") {
                    return {'status': 'success', 'data': response.data}
                }else{
                    console.log("response-",response)
                    return {'status': 'error', 'error': response.error.response.data.detail}
                }
            }
        ).catch(
            (response) => {
                return {'status': 'error', 'error': response}
            }
        );

}

export default getService