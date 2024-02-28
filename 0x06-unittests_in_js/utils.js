// Utils module
const Utils = {};

Utils.calculateNumber = function (type, a, b) {
  const aRounded = Math.round(a);
  const bRounded = Math.round(b);

  if (type === 'SUM') return aRounded + bRounded;
  if (type === 'SUBTRACT') return aRounded - bRounded;
  if (type === 'DIVIDE') return bRounded === 0 ? 'Error' : aRounded / bRounded;
};

module.exports = Utils;
