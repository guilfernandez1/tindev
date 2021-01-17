const express = require('express');
const DevController = require('../src/controllers/DevController');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send('Ok');
});

routes.post('/devs', DevController.create);

module.exports = routes;