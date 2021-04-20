// Uid with number type or string.
export {};

// ALIAS
type IdUser = number | string;
type UserName = string;
let idUser: IdUser;
idUser = 10;
idUser = 'asfgfasdgasdgasd';

// Find username by id
function  getUsernameById(id: IdUser): UserName {
  // Business logic.
  return id.toString();
}

console.log(getUsernameById(10));
console.log(getUsernameById(idUser));

// ALIAS