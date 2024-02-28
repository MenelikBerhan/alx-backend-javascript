// test for calculateNumber function
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber(a, b)', function () {
  it('Negative and positive numbers having a decimal digit of 5.', function () {
    assert.equal(calculateNumber(-1.5, 0.5), 0);
  });
  it('Negative and positive numbers having a decimal digit less than 5.', function () {
    assert.equal(calculateNumber(-1.4, 0.4), -1);
  });
  it('Negative and positive numbers having a decimal digit greater than 5.', function () {
    assert.equal(calculateNumber(-1.6, 0.6), -1);
  });
  it('Negative and positive numbers w/o a decimal digit.', function () {
    assert.equal(calculateNumber(-1, 4), 3);
  });
  it('Negative and positive numbers with a decimal digit of 0.', function () {
    assert.equal(calculateNumber(-1.0, 4.0), 3);
  });
  it('Two Negative numbers w/o a decimal digit.', function () {
    assert.equal(calculateNumber(-1, -4), -5);
  });
  it('Two Positive numbers w/o a decimal digit.', function () {
    assert.equal(calculateNumber(1, 4), 5);
  });
  it('Zero for both numbers.', function () {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('Zero for both numbers.', function () {
    assert.equal(calculateNumber(0.0, 0.0), 0);
  });
});
