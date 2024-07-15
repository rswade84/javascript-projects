const checkFive = require('../checkFive.js');

describe('The checkFive function', function () {
  test("returns 'num is less than 5.' when num is less than 5.", function () {
    let output = checkFive(2);
    expect(output).toEqual('2 is less than 5.');
  });
});
