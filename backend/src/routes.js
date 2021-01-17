const express = require('express');
const DevController = require('../src/controllers/DevController');
const LikeController = require('../src/controllers/LikeController');
const DislikeController = require('../src/controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.create);
routes.post('/devs/:devId/likes', LikeController.create);
routes.post('/devs/:devId/dislikes', DislikeController.create);

module.exports = routes;