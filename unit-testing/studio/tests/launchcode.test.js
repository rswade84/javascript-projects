// launchcode.test.js code:
const launchcode = require('../index.js');

describe('Testing launchcode', function () {
  test("should contain key 'organization' with value 'nonprofit'.", function () {
    expect(launchcode.organization).toBe('nonprofit');
  });

  test("should contain key 'executiveDirector' with value 'Jeff'.", function () {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });

  test("should contain key 'percentageCoolEmployees' with value 100.", function () {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should contain key 'programsOffered' with array values 'Web Development, Data Analysis, Liftoff'.", function () {
    expect(launchcode.programsOffered[0]).toBe('Web Development');
    expect(launchcode.programsOffered[1]).toBe('Data Analysis');
    expect(launchcode.programsOffered[2]).toBe('Liftoff');
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("should return 'Launch!' when passed a number that is only divisible by 2.", function () {
    let output = launchcode.launchOutput(2);
    expect(output).toBe('Launch');
  });

  test("should return 'Code' when passed a number that is only divisible by 3.", function () {
    let output = launchcode.launchOutput(3);
    expect(output).toBe('Code');
  });

  test("should return 'Rocks' when passed a number that is only divisible by 5.", function () {
    let output = launchcode.launchOutput(5);
    expect(output).toBe('Rocks');
  });

  test("should return 'LaunchCode' when passed a number that is divisible by 2 and 3.", function () {
    let output = launchcode.launchOutput(6);
    expect(output).toBe('LaunchCode');
  });

  test("should return 'Code Rocks' when passed a number that is divisible by 3 and 5.", function () {
    let output = launchcode.launchOutput(15);
    expect(output).toBe('Code Rocks');
  });

  test("should return 'Launch Rocks' when passed a number that is divisible by 2 and 5.", function () {
    let output = launchcode.launchOutput(10);
    expect(output).toBe('Launch Rocks');
  });

  test("should return 'LaunchCode Rocks' when passed a number that is divisible by 2, 3, and 5.", function () {
    let output = launchcode.launchOutput(30);
    expect(output).toBe('LaunchCode Rocks');
  });

  test("should return 'Rutabagas! That doesn't work.' when passed a number that is not divisible by 2, 3, or 5.", function () {
    let output = launchcode.launchOutput(7);
    expect(output).toBe("Rutabagas! That doesn't work.");
  });
});
