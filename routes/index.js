const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const vacancyController = require('../controllers/vacancyController');

module.exports = () => {
    router.get('/', homeController.index);
    //vacancies
    router.get('/vacancies/create', vacancyController.create);
    return router;
}