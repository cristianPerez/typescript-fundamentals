export {};
// Create a picture

/* function createPicture(title, date, size) {
  // title
} */

type SquareSize = '100x100' | '500x500' | '1000x1000';

// Using TS we can assign params.
function createPic(title: string, date: string, size: SquareSize) {
  // We create a pic
  console.log('Create picture using', title, date, size);
}

createPic('My Birthday', '2020-03-10', '500x500');
// createPic('Colombia Trip', '2020-03'); // Error missing param.

// Optional Params

function createPhoto(title?: string, date?: string, size?: SquareSize) {
  // We create a pic
  console.log('Create picture using', title, date, size);
}

createPhoto('My Birthday', '2020-03-10', '500x500');
createPhoto('Colombia');

// Flat arrow function 
let createPhotoNew = (title?: string, date?: string, size?: SquareSize): object => {
  return {
    title,
    date,
    size
  };
};

const pic = createPhotoNew('My Birthday', '2020-03-10', '500x500');
console.log(pic);

// Using return type with TS.

function handleError(code: number, message: string): never | string {
  // Process of code or message
  if(message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'Everithing is pelfet';
  }
}

try {
  let result  = handleError(200, 'ok');
  console.log('Result', result);
  result  = handleError(400, 'error'); // Never
  console.log('Result', result);  
} catch (error) {
  console.log(error.message);
}

