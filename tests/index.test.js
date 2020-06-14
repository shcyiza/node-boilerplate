const consola = require('consola');
const { server } = require('./config/chaiServer');

// Action you need to do after you test
after(async () => {
    try {
        // close server connection
        server.close();
    } catch(err) {
        consola.error(error);
    }
});