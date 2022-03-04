const mongoose = require('mongoose');

const aopdDetailsSchema = new mongoose.Schema({
    copyright: {
        type: String
    },
    date: {
        type: Date
    },
    explanation: {
        type: String
    },
    hdurl: {
        type: String
    },
    media_type: {
        type: String
    },
    service_version: {
        type: String
    },
    title: {
        type: String
    },
    url: {
        type: String
    }
})

const aopdDetailsModel = mongoose.model('aopdDetails', aopdDetailsSchema);
module.exports = {
    aopdDetailsModel
}