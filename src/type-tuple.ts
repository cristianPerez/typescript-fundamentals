//
export {}; // For solve the problem with the same name

let user: [number, string];
user = [1, 'cperez354'];

console.log('user', user);
console.log('userName', user[1]);
console.log('userName.length', user[1].length);
console.log('Id', user[0]);


// Tuples with several values.
// id, userName, isPro

let userInfo: [number, string, boolean, number];
userInfo = [2, 'paparazzi', true, 1];
console.log('userInfo', userInfo, 2);

// Array of tuples.
let arrayMatrix: [number, string][] = [];

arrayMatrix.push([1, 'miconos']);
arrayMatrix.push([2, 'Paparazzi']);
arrayMatrix.push([3, 'lensQueen']);

console.log('arrayMatrix', arrayMatrix);

// Using Array functions
// lensQueen -> lensQueen001.

arrayMatrix[2][1] = arrayMatrix[2][1].concat('001');
console.log('arrayMatrix', arrayMatrix);