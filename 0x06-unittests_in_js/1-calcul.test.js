// test for calculateNumber function
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber(type, a, b)', function () {
  describe('type === SUM', function () {
    it('Negative and positive numbers having a decimal digit of 5.', function () {
      assert.equal(calculateNumber('SUM', -1.5, 0.5), 0);
    });
    it('Negative and positive numbers having a decimal digit less than 5.', function () {
      assert.equal(calculateNumber('SUM', -1.4, 0.4), -1);
    });
    it('Negative and positive numbers having a decimal digit greater than 5.', function () {
      assert.equal(calculateNumber('SUM', -1.6, 0.6), -1);
    });
    it('Negative and positive numbers w/o a decimal digit.', function () {
      assert.equal(calculateNumber('SUM', -1, 4), 3);
    });
    it('Negative and positive numbers with a decimal digit of 0.', function () {
      assert.equal(calculateNumber('SUM', -1.0, 4.0), 3);
    });
    it('Two Negative numbers w/o a decimal digit.', function () {
      assert.equal(calculateNumber('SUM', -1, -4), -5);
    });
    it('Two Positive numbers w/o a decimal digit.', function () {
      assert.equal(calculateNumber('SUM', 1, 4), 5);
    });
    it('Zero for both numbers.', function () {
      assert.equal(calculateNumber('SUM', 0, 0), 0);
    });
    it('Zero for both numbers.', function () {
      assert.equal(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type === SUBTRACT', function () {
    it('Negative and positive numbers having a decimal digit of 5.', function () {
      assert.equal(calculateNumber('SUBTRACT', -1.5, 0.5), -2);
    });
    it('Negative and positive numbers having a decimal digit less than 5.', function () {
      assert.equal(calculateNumber('SUBTRACT', -1.4, 0.4), -1);
    });
    it('Negative and positive numbers having a decimal digit greater than 5.', function () {
      assert.equal(calculateNumber('SUBTRACT', -1.6, 0.6), -3);
    });
    it('Negative and positive numbers w/o a decimal digit.', function () {
      assert.equal(calculateNumber('SUBTRACT', -1, 4), -5);
    });
    it('Negative and positive numbers with a decimal digit of 0.', function () {
      assert.equal(calculateNumber('SUBTRACT', -1.0, 4.0), -5);
    });
    it('Two Negative numbers w/o a decimal digit.', function () {
      assert.equal(calculateNumber('SUBTRACT', -1, -4), 3);
    });
    it('Two Positive numbers w/o a decimal digit.', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 4), -3);
    });
    it('Zero for both numbers.', function () {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
    it('Zero for both numbers.', function () {
      assert.equal(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type === DIVIDE', function () {
    it('Negative and positive numbers having a decimal digit of 5.', function () {
      assert.equal(calculateNumber('DIVIDE', -1.5, 0.5), -1);
    });
    it('Negative and positive numbers having a decimal digit less than 5.', function () {
      assert.equal(calculateNumber('DIVIDE', -1.4, 0.4), 'Error');
    });
    it('Negative and positive numbers having a decimal digit greater than 5.', function () {
      assert.equal(calculateNumber('DIVIDE', -1.6, 0.6), -2);
    });
    it('Negative and positive numbers w/o a decimal digit.', function () {
      assert.equal(calculateNumber('DIVIDE', -1, 4), -0.25);
    });
    it('Negative and positive numbers with a decimal digit of 0.', function () {
      assert.equal(calculateNumber('DIVIDE', -1.0, 4.0), -0.25);
    });
    it('Two Negative numbers w/o a decimal digit.', function () {
      assert.equal(calculateNumber('DIVIDE', -1, -4), 0.25);
    });
    it('Two Positive numbers w/o a decimal digit.', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
    });
    it('Zero for both numbers.', function () {
      assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
    it('Zero for both numbers.', function () {
      assert.equal(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
    it('Dividend rounded to zero while divisor is not.', function () {
      assert.equal(calculateNumber('DIVIDE', -0.5, 0.5), 0);
    });
    it('Dividend rounded to zero while divisor is not.', function () {
      assert.equal(calculateNumber('DIVIDE', 0.4, 0.5), 0);
    });
    it('Both Dividend and divisor rounded to zero.', function () {
      assert.equal(calculateNumber('DIVIDE', -0.4, 0.3), 'Error');
    });
  });
});
