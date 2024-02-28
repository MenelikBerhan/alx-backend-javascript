// test for sendPaymentRequestToApi
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('Calls Utils.calculateNumber with right arguments.', function () {
    const spy = sinon.spy(Utils, 'calculateNumber'); // spy tracks execution of calculateNumber method
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(spy.returnValues[0]).to.equal(120);
    spy.restore(); // Replaces the spy with the original method
  });
});
