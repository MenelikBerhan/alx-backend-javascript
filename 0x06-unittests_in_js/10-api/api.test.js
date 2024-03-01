// test for api
const { expect } = require('chai');
const request = require('request');

describe('Api', function () {
  describe('Index page', function () {
    it('Should return status code 200 with welcome message.', function (done) {
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
          expect(body, 'Right message returned').to.equal('Payment methods for cart 1');
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

  describe('Available payments page', function () {
    it('Should return status code 200 with right object in body.', function (done) {
      request.get('http://localhost:7865/available_payments', (err, res, body) => {
        if (err) done(err);
        else {
          const expectedData = { payment_methods: { credit_cards: true, paypal: false } };
          expect(res.statusCode, 'Status code should be 200').to.equal(200);
          expect(JSON.parse(body), 'Right message returned').to.deep.equal(expectedData);
          done();
        }
      });
    });
  });

  describe('Loging page', function () {
    it('Correct status and message when `userName` passed in request.', function (done) {
      request.post({
        url: 'http://localhost:7865/login',
        body: { userName: 'Menelik' },
        json: true,
      }, (err, res, body) => {
        if (err) done(err);
        else {
          expect(res.statusCode, 'Status code should be 200').to.equal(200);
          expect(body, 'Right message returned').to.equal('Welcome Menelik');
          done();
        }
      });
    });

    it('Correct status and message when `userName` is not passed in request.', function (done) {
      request.post('http://localhost:7865/login', (err, res, body) => {
        if (err) done(err);
        else {
          expect(res.statusCode, 'Status code should be 200').to.equal(200);
          expect(body, 'Right message returned').to.contain('Welcome undefined');
          done();
        }
      });
    });
  });
});

/* another way to post form data
request.post({
  headers: { 'content-type': 'application/json' },
  url: 'http://localhost:7865/login',
  body: JSON.stringify({ userName: 'Menelik' }),
}, (err, res, body) => {
  if (err) throw Error(err);
  else {
    console.log(body);
  }
}); */
