// test for sendPaymentRequestToApi
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let logSpy;
  // assign spy to log function before each test
  beforeEach(function beforeTestHook() {
    logSpy = sinon.spy(console, 'log');
  });
  // restore original function
  afterEach(function afterTestHook() {
    logSpy.restore();
  });

  it('Logs correct information to console.', function () {
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledOnceWithExactly('The total is: 120')).to.equal(true);
  });

  it('Logs correct information to console 2.', function () {
    sendPaymentRequestToApi(10, 10);
    expect(logSpy.calledOnceWithExactly('The total is: 20')).to.equal(true);
  });
});
