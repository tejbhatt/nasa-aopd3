let envConfig = require("./data/config.json")
module.exports = {
    PORT: envConfig.HTTP.PORT,
    MONGO: {
        url: envConfig.MONGO.URL,
        "options": {
            "useNewUrlParser": true,
            "useUnifiedTopology": true
        },
        database: envConfig.MONGO.DATABASE,
    },
    APOD: {
        METHOD: envConfig.APOD.METHOD,
        URL: envConfig.APOD.URL,
        api_key: envConfig.APOD.api_key
    }
}