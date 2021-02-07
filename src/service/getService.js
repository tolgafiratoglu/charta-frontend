import axios from "axios";
import config from "../config/system";

const getService = (urlContext, getRequestData) => {

        return axios.get(
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

export default getService