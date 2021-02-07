import config from 'react-global-configuration';

config.set(
    {
        "apiUrl": "http://127.0.0.1:8000/",
        "apiRequests": {
            "login": "auth/token/",
            "building_list": "building/list"
        },
        "pagination": {
            "building": 10,
            "room": 10,
            "booking": 10,
            "reservation": 10,
            "roomtype": 10,
            "visitor": 10
        }
    }
)

export default config