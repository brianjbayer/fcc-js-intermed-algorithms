// Fill in the object constructor with the following methods below:
//  getFirstName()
//  getLastName()
//  getFullName()
//  setFirstName(first)
//  setLastName(last)
//  setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and
// it has to be a string. These methods must be the only available
// means of interacting with the object.

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  // ASSUMPTION: Single word first and last names
  let fullNameArr = firstAndLast.split(' ');

  this.getFullName = function () {
    return fullNameArr.join(' ');
  };
  this.setFullName = function (firstAndLastName) {
    fullNameArr = firstAndLastName.split(' ');
  };

  this.getFirstName = function () {
    return fullNameArr[0];
  };
  this.setFirstName = function (firstName) {
    fullNameArr[0] = firstName;
  };

  this.getLastName = function () {
    return fullNameArr[1];
  };
  this.setLastName = function (lastName) {
    fullNameArr[1] = lastName;
  };

  return firstAndLast;
};

module.exports = Person;
