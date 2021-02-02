import config from 'react-global-configuration';

config.set(
    {
        "apiUrl": "http://127.0.0.1:8000/",
        "apiRequests": {
            "login": "auth/token/"
        }
    }
)

const routeConfig = config

export default routeConfig