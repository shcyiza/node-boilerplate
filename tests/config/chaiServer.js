// Import the dependencies for testing
const chai = require( 'chai');
const chaiHttp = require( 'chai-http');
const server = require( '../../app/server');

chai.use(chaiHttp);

chai.should();


module.exports = { server, chai };