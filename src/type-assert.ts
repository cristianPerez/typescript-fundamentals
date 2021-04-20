export {};
// <> // Angle Bracket syntax

let username: any;
username = 'cperez354';


// We have a string, ts trust in me.

let message: string = (<string> username).length > 5
                       ? `Welcome ${username}`
                       : 'Username is too short';
console.log('Message', message);

let usernameWithId: any = 'cperez354 sdfsdgsfdg4523425';
// How to get the username
let usernameOnly = (<string>usernameWithId).split(' ')[0];
console.log('usernameOnly', usernameOnly);

message = (username as string).length > 5
          ? `Welcome ${username}`
          : 'Username is too short';

let helloUser: any;
helloUser = 'Hello paparazzi';
username = (helloUser as string).substring(6);
console.log('Substring', username);