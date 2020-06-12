const chai = require( 'chai');
const chaiHttp = require( 'chai-http');
const server = require( '../../../app/server');

chai.use(chaiHttp);

chai.should();

// Restart server so the server don't conflict with itself
// For with his port when chai test an other file
server.close();
server.listen(process.env.SERVER_PORT);

module.exports = {chai, server};