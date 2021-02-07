import axios from "axios";
import config from "../config/system";

const postService = (urlContext, requestData) => {

        return axios.post(
            config.get('apiUrl') + config.get('apiRequests.' + urlContext),
            requestData
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
                return {'status': 'error', 'error': 'response'}
            }
        );

}

export default postService