const path = require('path');
const consola = require('consola')

const init = () => {
    consola.info({
        message: `Server starting in ${process.env.NODE_ENV} mode`,
        badge: true,
    })

    require('dotenv-flow').config();
}

module.exports = init;
