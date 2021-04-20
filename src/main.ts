console.log('Hello Platzi world');

// Type : Number

// Explicit
let phone: number;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error

// Infered
let phoneNumber = 23552452;
phoneNumber = 121;
// phoneNumber = true; // Error for type of data.

let hex: number = 0xf00d;
let binary: number = 0b00001;
let octal: number = 0o744;


// Type : Boolean

// Explicit
let isPro : boolean;
isPro = true;
isPro = false;
// isPro = 1 // Error for type.

// Infered
let isUserPro = true;
isUserPro = false;
// isUserPro = 4; // // Error for type.

// Type : String

// Explicit
let userName: string = 'cperez354';
userName = "Cperez";
// userName = true; // Error in type

// Template string.

// Using back-tick or back-quote.
let userInfo: string;
userInfo = `
    User Info:
    userName: ${userName}
    firstName: ${userName + ' Perez'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log(userInfo);
