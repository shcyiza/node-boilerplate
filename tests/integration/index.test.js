const { chai, server } = require('./chaiServer');

describe("Controller", () => {
    describe("Commons integration test", () => {

        it("GET / does not exist", (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});