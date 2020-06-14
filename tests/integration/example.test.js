// Import the dependencies for testing
const { chai, server } = require('../config/chaiServer');

describe("Example Contoller", (done) => {
 
    it("GET /api/v1/example/show/:id should give object with property id", (done) => {
        const id = "5";

        chai.request(server)
            .get(`/api/v1/example/show/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.eql( {id} );
                done();
            });
    });

    const newExempleRuner = (testString, done) => {
        const reqBody = { message: testString };
        const expected = { example: testString }

        chai.request(server)
            .post(`/api/v1/example/new/`)
            .set('Content-Type', 'application/json')
            .send(reqBody)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.eql(expected);
                done();
            });
    }

    it("Post /api/v1/new give object with property example 1", (done) => {
        newExempleRuner("this is an example", done);
    });

    it("Post /api/v1/new give object with property example 2", (done) => {
        newExempleRuner("this is an second example", done);
    });

    it("Post /api/v1/new give object with property example 3", (done) => {
        newExempleRuner("kikou lol", done);
    });
})