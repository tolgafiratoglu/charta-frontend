import axios from "axios";
import routeConfig from "../config/route";

const getService = (urlContext, getRequestData) => {

        return axios.get(
            routeConfig.get('apiUrl') + routeConfig.get('apiRequests.' + urlContext) + "?" + getRequestData
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

export default getService