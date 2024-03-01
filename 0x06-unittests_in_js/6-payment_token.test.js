// test for getPaymentTokenFromAPI function
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI function', function () {
  it('Should return a promise when success=True.', function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        const expectedData = { data: 'Successful response from the API' };
        expect(data, 'Correct reslove data').be.deep.equal(expectedData);
        done();
      })
      .catch((error) => { done(error); });
  });

  it('Should do nothing when success=False.', function (done) {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
    done();
  });
});
