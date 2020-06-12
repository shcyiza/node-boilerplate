// Import the dependencies for testing
const chai = require( 'chai');
const chaiHttp = require( 'chai-http');
const server = require( '../../app/server');

chai.use(chaiHttp);

chai.should();

// Has to restart the server everytime this module is call
// to avoid port conflict
server.close();
server.listen(process.env.SERVER_PORT);

module.exports = { server, chai };