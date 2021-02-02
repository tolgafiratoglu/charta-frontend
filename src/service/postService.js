import axios from "axios";
import routeConfig from "../config/route";

export const postService = (requestData) => {

        return axios.post(
            routeConfig.get('apiUrl') + routeConfig.get('apiRequests.login'), 
            requestData
        ).then(
            (response) => {
                console.log("response", response)
                if(response.access) {
                    return {'status': 'success', 'data': response}
                }else{
                    return {'status': 'error', 'error': 'post.failed'}
                }
            }
        ).catch(
            (response) => {
                return {'status': 'error', 'error': 'response'}
            }
        );

}