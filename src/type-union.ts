// Uid with number type or string.
export {};

// UNION
let idUser: number | string;
idUser = 10;
idUser = '10';

// Find username by id
function  getUsernameById(id: number | string): string {
  // Business logic.
  return id.toString();
}

console.log(getUsernameById(10));
console.log(getUsernameById('asfgfasdgasdgasd'));

// ALIAS