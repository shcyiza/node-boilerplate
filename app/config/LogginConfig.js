const morgan = require("morgan");
const consola = require("consola");

const logginConfig = {
    getMiddleware: function (req, res, next) {
        // logger middleware
        morgan.token("body", req => {
            return (
                req.body &&
                JSON.stringify(req.body)
                    .replace(/[{}\n]/g, "")
                    .replace(/\"/g, "'")
                    .replace(/\\n/g, "'")
                    .replace(/[ ]{1,}/g, " ")
            );
        });

        return morgan(
            "method=:method - url=:url - response-time=:response-time\n- body= :body",
            {
                stream: {
                    write: message => consola.info({
                        message,
                        badge: true,
                    }),
                }
            },
        );
    }
};

module.exports = logginConfig;