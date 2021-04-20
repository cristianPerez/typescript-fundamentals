// Explisit type.

let idUser: any;
idUser = 1; // number
idUser = '1'; // string

console.log('idUser', idUser);

// Infered type.

let otherUd;
otherUd = 1; // number
otherUd = '1'; // string

console.log('otherUd', otherUd);

let surprise: any = 'Hello typescript';
//
// surprise = 1; // Error by changing the type
const res = surprise.substring(6);
console.log('res', res);