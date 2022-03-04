const { create, getApod } = require('../packages/database/mongo/operations/aopdDetails');
const { getApodDetails } = require('../packages/services/getApodDetails.service');

const getApodController = async (req, res) => {
    try{   
        const { date } = req.query

        const isoDate = new Date(date);
        const currentDate = new Date();

        if(isoDate > currentDate)
            return res.status(400).json({message: "Selected date cannot be greator than current date"});

        //get apod details from DB if exist
        let apodExistInDb = await getApod(isoDate);

        //if apod details is not exist in DB then call API
        if(!apodExistInDb) {
            //get apod details from nasa api
            const result = await getApodDetails(date);

            //storing apod details in DB
            apodExistInDb = await create(result)
        }

        return res.status(200).json(apodExistInDb)
    }
    catch(error){
        return res.status(error.statusCode || 400).json({message: error.message})
    }
}

module.exports = {
    getApodController
}