// Brakets [];

// Explicit

let users: string[];
users = ['luix', 'cperez254', 'Miconos']; 
// users = ['luix', 1, 'Miconos']; // Error of type

// Inferred like string
let otherUsers = ['luix', 'micx'];
// otherUsers = ['luix', 1, 'Miconos']; // Error of type

// Generics Array<Type>

let pictureTitles: Array<string>;
pictureTitles = ['Favorite sunset', 'Vacation Time'];

// Access to values in an Array.
console.log('First User', users[0]);
console.log('First Title', pictureTitles[0]);

// Properties in Array
console.log('Size', users.length);

// Using functions
users.push('APlatziUser');
console.log('Before sort', users);
users.sort();
console.log('After sort', users);
