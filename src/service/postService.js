import axios from "axios";
import routeConfig from "../config/route";

const postService = (urlContext, requestData) => {

        return axios.post(
            routeConfig.get('apiUrl') + routeConfig.get('apiRequests.' + urlContext), 
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