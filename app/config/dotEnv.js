const path = require('path');
const consola = require('consola')

const init = () => {
    consola.info({
        message: `Server starting in ${process.env.NODE_ENV} mode`,
        badge: true,
    })

    if(
        process.env.NODE_ENV === 'test'
        && process.env.SERVER_PORT === null
    ) require('dotenv-flow').config();
}

module.exports = init;
