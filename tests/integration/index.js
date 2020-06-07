// Import the dependencies for testing
const chai = require( 'chai');
const chaiHttp = require( 'chai-http');
const app = require( '../../app/server');

chai.use(chaiHttp);

chai.should();

describe("Controller", () => {
    describe("Commons integration test", () => {

        it("GET / does not exist", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});