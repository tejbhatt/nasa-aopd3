const express = require('express');
const router = express.Router();

const { getApodController } = require('../controllers/apod.controller');

//routes
router.get('/getApod', getApodController)

module.exports = router