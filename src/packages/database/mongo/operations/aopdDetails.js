const { aopdDetailsModel } = require("../models/aopdDetails");

const create = async (data) => {
    return await aopdDetailsModel.create(data)
}

const getApod = async(date) => {
    return await aopdDetailsModel.findOne({date})
}

module.exports = {
    create,
    getApod
}