import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import config from "../config/system";

import HttpService from "./httpService"

const postService = (urlContext, requestData, authorizationHeader) => {

        var authHeader = {}
        if(authorizationHeader == true){
            var jwtToken = HttpService.getPrivateConfig()
            if(jwtToken != false){
                authHeader = jwtToken
            }
        }

        return axios.post(
            config.get('apiUrl') + config.get('apiRequests.' + urlContext),
            requestData,
            authHeader
        ).then(
            (response) => {
                if(response.data != "undefined") {
                    return {'status': 'success', 'data': response.data}
                }else{
                    return {'status': 'error', 'error': response.data.detail}
                }
            }
        ).catch(
            (response) => {
                return {'status': 'error', 'error': 'response'}
            }
        );

}

export default postService