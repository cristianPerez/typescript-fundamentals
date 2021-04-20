// Type: object

let user: object;
user = {}; //Object

user = {
  id: 1,
  username: 'cperez354',
  firstName: 'Cristian',
  isPro: true
};

console.log('user', user);
// console.log('userName', user.username); // Error because is not accesible.

const myObj = {
  id: 1,
  username: 'cperez354',
  firstName: 'Cristian',
  isPro: true
};

const isInstance = myObj instanceof Object; // Class object of js.
console.log('instance', isInstance);
console.log('userName', myObj.username);
