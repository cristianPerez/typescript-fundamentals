// Orientation for images

/* const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3; */

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

/* enum PhotoOrientation {
  Landscape = 10,
  Portrait = 1,
  Square = 58,
  Panorama = 49
} */

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('Landscape', landscape); 
console.log('Landscape', PhotoOrientation[3]);
console.log('Landscape', PhotoOrientation);

enum PictureOrientation {
  Landscape = 10,
  Portrait,
  Square,
  Panorama
}

console.log('Portrait', PictureOrientation.Portrait);
/**
 * Expected result is 'Portrait 11', because the starting value
 * is an integer.
 */ 
console.log('Portrait', PictureOrientation);

// Enum personalized

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  EEUU = 'usa',
  España = 'esp'
}

const country: Country = Country.Colombia;
console.log('Country', country); 
// console.log('Country', Country[country]); // Error because the type 
let countryTwo: Country;
countryTwo = Country.EEUU;
console.log('CountryTwo', countryTwo);
console.log('CountryEnum', Country);

enum CountryExtended {
  Argentina= 'Arg',
  Brasil= 'Bra'
}

let joinedEnums = Object.assign({}, Country, CountryExtended);
console.log('Joined Enums', joinedEnums);

let joinedEnumsSprite = { ...Country, ...CountryExtended };
console.log('Joined Enums Sprite', joinedEnumsSprite);