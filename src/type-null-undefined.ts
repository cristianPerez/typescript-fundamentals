// Explisit

let nullVariable : null;
nullVariable = null;
// nullVariable = 1; // Error


// Infered any type
let otherVariable = null;
otherVariable = 'Test';

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error by type.

let otherUndefinedVariable = undefined;
otherUndefinedVariable = null;
otherUndefinedVariable = 'miconos';

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefinedVariable', otherUndefinedVariable);

// Null or Undefined like subtypes

let albumName: string;
/* albumName = null;
albumName = undefined; */

// --strictNullChecks