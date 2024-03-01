// test for api
const { expect } = require('chai');
const request = require('request');

describe('Index page', function () {
  it('Should return stats code 200 with welcome message.', function (done) {
    request.get('http://localhost:7865', (err, res, body) => {
      if (err) done(err);
      else {
        expect(res.statusCode, 'Status code should be 200').to.equal(200);
        expect(body, 'Right message returned').to.equal('Welcome to the payment system');
        done();
      }
    });
  });
});
