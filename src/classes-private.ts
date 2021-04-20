export { }

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  // Properties
  #id: number;
  #title: string;
  #orientation: PhotoOrientation;

  public constructor(id: number,
    title: string,
    orientation: PhotoOrientation) {
    this.#id = id;
    this.#title = title;
    this.#orientation = orientation;
  }

  public toString() {
    return `[
      id: ${this.#id},
      title: ${this.#title},
      orientetion: ${this.#orientation},
    ]`;
  }
}

class Album {
  #id: number;
  #title: string;
  #pictures: Picture[];

  public constructor(id: number, title: string) {
    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }

  public addPicture(picture: Picture) {
    this.#pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'new Picture', PhotoOrientation.Landscape);
album.addPicture(picture);

console.log('album', album);

// Acces to public memebers

// picture.id = 100; // Error
// picture.title = 'Another title'; // Error
// album.title = 'Personal Activities'; // Error
console.log('album', album);