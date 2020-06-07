const { Router } = require('express');
const exampleController = require('./example');

const routes = Router();
const BASE_URI = "/api/v1"
const Uri = uri => BASE_URI + uri

routes.get( Uri('/example/show/:id'), exampleController.showAction );
routes.post( Uri('/example/new'), exampleController.newAction );

module.exports = routes;
