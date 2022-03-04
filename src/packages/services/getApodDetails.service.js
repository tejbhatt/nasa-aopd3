const request = require("request")
const util = require("util")
const requestPromise = util.promisify(request)
const { APOD } = require('../../../config/config')

const getApodDetails = async (date) => {
    let options = {
        method: APOD.METHOD,
        url: `${APOD.URL}?api_key=${APOD.api_key}&date=${date}`,
        time: true,
        timeout: 3000
    };

    try {
      let results = await requestPromise(options);

      if(results.statusCode == 500){
          throw new Error("Nasa APOD API Error")
      }

      return JSON.parse(results.body)
    } catch (error) {
      console.error(error, options)
      throw new Error(error)
    } 
}

module.exports = {
    getApodDetails
}