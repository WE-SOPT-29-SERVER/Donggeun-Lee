// 이렇게도
const func = () => {
  /** logic */
};
module.exports = func;

// 이렇게도 가능
const object = {
  key: value,
  key2: value,
  method: function () {
    //...
  },
};

const add = () => {};
const subtract = () => {};
const multiply = () => {};
const divide = () => {};

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

module.exports = calculator;
