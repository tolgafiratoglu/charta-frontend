import axios from "axios";
import config from "../config/system";

const deleteService = (urlContext, getRequestData) => {

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