// Import the dependencies for testing
const chai = require( 'chai');
const chaiHttp = require( 'chai-http');
const app = require( '../../src/server');

chai.use(chaiHttp);

chai.should();describe("Controller", () => {
    describe("Commons", () => {

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

    describe("Example Contoller", (done) => {
 
        it("GET /api/v1/example/show/:id should give object with property id", (done) => {
            const id = "5";

            chai.request(app)
                .get(`/api/v1/example/show/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql( {id} );
                    done();
                });
        });

        it("Post /api/v1/example/show give object with property example 1", (done) => {
            const testString = "this is an example";
            const reqBody = {message: testString};

            chai.request(app)
                .post(`/api/v1/example/new/`)
                .set('Content-Type', 'application/json')
                .send(reqBody)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql( {example: testString} );
                    done();
                });
        });

        it("Post /api/v1/example/show give object with property example 2", (done) => {
            const testString = "this is an second example";
            const reqBody = {message: testString};

            chai.request(app)
                .post(`/api/v1/example/new/`)
                .set('Content-Type', 'application/json')
                .send(reqBody)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql( {example: testString} );
                    done();
                });
        });

        it("Post /api/v1/example/show give object with property example 3", (done) => {
            const testString = "kikou lol";
            const reqBody = {message: testString};
            const expected = {example: testString}

            chai.request(app)
                .post(`/api/v1/example/new/`)
                .set('Content-Type', 'application/json')
                .send(reqBody)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql(expected);
                    done();
                });
        });
    })
});