// test for api
const { expect } = require('chai');
const request = require('request');

describe('Api', function () {
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

  describe('Cart page', function () {
    it('Correct status and message when :id is a number.', function (done) {
      request.get('http://localhost:7865/cart/1', (err, res, body) => {
        if (err) done(err);
        else {
          expect(res.statusCode, 'Status code should be 200').to.equal(200);
          expect(body, 'Right message returned').to.equal('Payment methods for cart :1');
          done();
        }
      });
    });

    it('Correct status and message when :id is not a number.', function (done) {
      request.get('http://localhost:7865/cart/a', (err, res, body) => {
        if (err) done(err);
        else {
          expect(res.statusCode, 'Status code should be 404').to.equal(404);
          expect(body, 'Right message returned').to.contain('Cannot GET /cart/a');
          done();
        }
      });
    });
  });
});
