// test for sendPaymentRequestToApi
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  const logSpy = sinon.spy(console, 'log'); // spy tracks log method
  // reset logSpy's history before each test
  beforeEach(function beforeTestHook() {
    logSpy.resetHistory();
  });

  it('Logs correct information to console.', function () {
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledOnceWithExactly('The total is: 120')).to.equal(true);
  });
  it('Logs correct information to console.', function () {
    sendPaymentRequestToApi(10, 10);
    expect(logSpy.calledOnceWithExactly('The total is: 20')).to.equal(true);
    logSpy.restore();
  });
});
