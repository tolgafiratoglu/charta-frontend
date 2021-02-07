import config from 'react-global-configuration';

config.set(
    {
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

const systemConfig = config

export default systemConfig