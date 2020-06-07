const { Router } = require('express');
const exampleController = require('./example');

const routes = Router();
const BASE_URI = "/api/v1"
const Uri = uri => BASE_URI + uri

routes.get( Uri('/example/show/:id'), exampleController.showAction );

module.exports = routes;
