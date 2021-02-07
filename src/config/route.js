import config from 'react-global-configuration';

config.set(
    {
        "apiUrl": "http://127.0.0.1:8000/",
        "apiRequests": {
            "login": "auth/token/",
            "building_list": "building/list"
        }
    }
)

const routeConfig = config

export default routeConfig