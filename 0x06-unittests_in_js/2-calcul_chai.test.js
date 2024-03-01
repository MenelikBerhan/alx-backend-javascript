// test for calculateNumber function
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber(type, a, b)', function () {
  describe('type === SUM', function () {
    it('Negative and positive numbers having a decimal digit of 5.', function () {
      expect(calculateNumber('SUM', -1.5, 0.5), "('SUM', -1.5, 0.5)").to.equal(0);
    });

    it('Negative and positive numbers having a decimal digit less than 5.', function () {
      expect(calculateNumber('SUM', -1.4, 0.4), "('SUM', -1.4, 0.4)").to.equal(-1);
    });

    it('Negative and positive numbers having a decimal digit greater than 5.', function () {
      expect(calculateNumber('SUM', -1.6, 0.6), "('SUM', -1.6, 0.6)").to.equal(-1);
    });

    it('Negative and positive numbers w/o a decimal digit.', function () {
      expect(calculateNumber('SUM', -1, 4), "('SUM', -1, 4)").to.equal(3);
    });

    it('Negative and positive numbers with a decimal digit of 0.', function () {
      expect(calculateNumber('SUM', -1.0, 4.0), "('SUM', -1.0, 4.0)").to.equal(3);
    });

    it('Two Negative numbers w/o a decimal digit.', function () {
      expect(calculateNumber('SUM', -1, -4), "('SUM', -1, -4)").to.equal(-5);
    });

    it('Two Positive numbers w/o a decimal digit.', function () {
      expect(calculateNumber('SUM', 1, 4), "('SUM', 1, 4)").to.equal(5);
    });

    it('Zero for both numbers.', function () {
      expect(calculateNumber('SUM', 0, 0), "('SUM', 0, 0)").to.equal(0);
    });

    it('Zero for both numbers 2.', function () {
      expect(calculateNumber('SUM', 0.0, 0.0), "('SUM', 0.0, 0.0)").to.equal(0);
    });
  });

  describe('type === SUBTRACT', function () {
    it('Negative and positive numbers having a decimal digit of 5.', function () {
      expect(calculateNumber('SUBTRACT', -1.5, 0.5), "('SUBTRACT', -1.5, 0.5)").to.equal(-2);
    });

    it('Negative and positive numbers having a decimal digit less than 5.', function () {
      expect(calculateNumber('SUBTRACT', -1.4, 0.4), "('SUBTRACT', -1.4, 0.4)").to.equal(-1);
    });

    it('Negative and positive numbers having a decimal digit greater than 5.', function () {
      expect(calculateNumber('SUBTRACT', -1.6, 0.6), "('SUBTRACT', -1.6, 0.6)").to.equal(-3);
    });

    it('Negative and positive numbers w/o a decimal digit.', function () {
      expect(calculateNumber('SUBTRACT', -1, 4), "('SUBTRACT', -1, 4)").to.equal(-5);
    });

    it('Negative and positive numbers with a decimal digit of 0.', function () {
      expect(calculateNumber('SUBTRACT', -1.0, 4.0), "('SUBTRACT', -1.0, 4.0)").to.equal(-5);
    });

    it('Two Negative numbers w/o a decimal digit.', function () {
      expect(calculateNumber('SUBTRACT', -1, -4), "('SUBTRACT', -1, -4)").to.equal(3);
    });

    it('Two Positive numbers w/o a decimal digit.', function () {
      expect(calculateNumber('SUBTRACT', 1, 4), "('SUBTRACT', 1, 4)").to.equal(-3);
    });

    it('Zero for both numbers.', function () {
      expect(calculateNumber('SUBTRACT', 0, 0), "('SUBTRACT', 0, 0)").to.equal(0);
    });

    it('Zero for both numbers 2.', function () {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0), "('SUBTRACT', 0.0, 0.0)").to.equal(0);
    });
  });

  describe('type === DIVIDE', function () {
    it('Negative and positive numbers having a decimal digit of 5.', function () {
      expect(calculateNumber('DIVIDE', -1.5, 0.5), "('DIVIDE', -1.5, 0.5)").to.equal(-1);
    });

    it('Negative and positive numbers having a decimal digit less than 5.', function () {
      expect(calculateNumber('DIVIDE', -1.4, 0.4), "('DIVIDE', -1.4, 0.4)").to.equal('Error');
    });

    it('Negative and positive numbers having a decimal digit greater than 5.', function () {
      expect(calculateNumber('DIVIDE', -1.6, 0.6), "('DIVIDE', -1.6, 0.6)").to.equal(-2);
    });

    it('Negative and positive numbers w/o a decimal digit.', function () {
      expect(calculateNumber('DIVIDE', -1, 4), "('DIVIDE', -1, 4)").to.equal(-0.25);
    });

    it('Negative and positive numbers with a decimal digit of 0.', function () {
      expect(calculateNumber('DIVIDE', -1.0, 4.0), "('DIVIDE', -1.0, 4.0)").to.equal(-0.25);
    });

    it('Two Negative numbers w/o a decimal digit.', function () {
      expect(calculateNumber('DIVIDE', -1, -4), "('DIVIDE', -1, -4)").to.equal(0.25);
    });

    it('Two Positive numbers w/o a decimal digit.', function () {
      expect(calculateNumber('DIVIDE', 1, 4), "('DIVIDE', 1, 4)").to.equal(0.25);
    });

    it('Zero for both numbers.', function () {
      expect(calculateNumber('DIVIDE', 0, 0), "('DIVIDE', 0, 0)").to.equal('Error');
    });

    it('Zero for both numbers 2.', function () {
      expect(calculateNumber('DIVIDE', 0.0, 0.0), "('DIVIDE', 0.0, 0.0)").to.equal('Error');
    });

    it('Dividend rounded to zero while divisor is not.', function () {
      expect(calculateNumber('DIVIDE', -0.5, 0.5), "('DIVIDE', -0.5, 0.5)").to.equal(0);
    });

    it('Dividend rounded to zero while divisor is not 2.', function () {
      expect(calculateNumber('DIVIDE', 0.4, 0.5), "('DIVIDE', 0.4, 0.5)").to.equal(0);
    });

    it('Both Dividend and divisor rounded to zero.', function () {
      expect(calculateNumber('DIVIDE', -0.4, 0.3), "('DIVIDE', -0.4, 0.3)").to.equal('Error');
    });
  });
});
