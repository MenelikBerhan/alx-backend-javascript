// test for sendPaymentRequestToApi
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('Calls Utils.calculateNumber with right arguments.', function () {
    // stub calculateNumber (completely replace it with stub) and make it return 10 always
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log'); // spy tracks log method
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(logSpy.calledOnceWithExactly('The total is: 10')).to.equal(true);
    // restore the original methods
    calculateNumberStub.restore();
    logSpy.restore();
  });
});
