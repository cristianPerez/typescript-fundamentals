export { }
// Create a function for show a pic.

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string
  date: string
  orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
  console.log(
    `[
      title: ${picture.title},
      date: ${picture.date},
      orientation: ${picture.orientation},
    ]`
  );
}

let myPic = {
  title: 'Test pic',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
  title: 'Miconos',
  date: '2020-09-03',
  orientation: PhotoOrientation.Portrait,
  // extra: 'test' // Error by contract
});

interface PuctureConfig {
  title?: string
  date?: string
  orientation?: PhotoOrientation
}

function generatePucture(config: PuctureConfig) {
  const pic = { title: 'Default', date: '2020-03' };
  if(config.title){
    pic.title = config.title;
  }
  if(config.date) {
    pic.date = config.date;
  }
  return pic;
}

let picAnswer = generatePucture({});
console.log(picAnswer);
picAnswer = generatePucture({ title: 'Travel pic'});
console.log(picAnswer);
picAnswer = generatePucture({ title: 'Travel pic', date: '2021-08'});
console.log(picAnswer);


// Interface: User readonly

interface User {
  readonly id: number;
  username: string;
  isPro: boolean;
}

let user: User;
user = {
  id: 10,
  username: 'cperez354',
  isPro: false
};

console.log('user', user);
user.username = 'paparazzi';
// user.id = 20; // Readonly attribute
console.log('user', user);

