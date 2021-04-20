// Literals

// We can allow just the following sizes of images
// 100X100, 500x500, 1000x1000

type SquareSize = '100x100' | '500x500' | '1000x1000'
// let smallPic: SquareSize = '200x200'; // Error the size does not exist
let smallPicture: SquareSize = '100x100';
let mediumSize: SquareSize = '500x500';

console.log('MediumSize', mediumSize);