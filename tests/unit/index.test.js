const chai = require( 'chai');
const exampleModel = require( '../../app/src/models/example');

var assert = chai.assert;

describe("Example Model", (done) => {
 
    it("this example should pass", (done) => {
        const expected = "foobar 5";

        const actual = exampleModel.foo(5);

        assert.typeOf(actual, 'string');
        assert.equal(actual, expected);
        done();
    });
})