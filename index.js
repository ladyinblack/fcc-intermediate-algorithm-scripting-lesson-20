// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Make a Person</h1>`;

/**
 * Fill in the object constructor with the following methods below:
 *      getFirstName()
 *      getLastName()
 *      getFullName()
 *      setFirstName(first)
 *      setLastName(last)
 *      setFullName(firstAndLast)
 * Run the tests to see the expected output for each method.  The methods that take an argument must accept only one argument and it has to be a string.  These methods must be the only available means of interacting with the object.
 * 
 const Person = function (firstAndLast) {
   // Only change code below this line
   // Complete the method below and implement the others similarly
   this.getFullName = function () {
     return '';
   };
   return firstAndLast;
 };
 */

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFullName = function () {
    return fullName;
  };
  this.getFirstName = function () {
    return fullName.split(' ')[0];
  };
  this.getLastName = function () {
    return fullName.split(' ')[1];
  };
  this.setFirstName = function (first) {
    return (fullName = first + ' ' + fullName.split(' ')[1]);
  };
  this.setLastName = function (last) {
    return (fullName = fullName.split(' ')[0] + ' ' + last);
  };
  this.setFullName = function (name) {
    return (fullName = name);
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');

console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setFirstName('Haskell');
console.log(bob.getFullName());

bob.setLastName('Curry');
console.log(bob.getFullName());

bob.setFullName('Harriet Simmons');
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
