export { }

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  // Properties
  public id: number;
  public title: string;
  public orientation: PhotoOrientation;

  public constructor(id: number,
    title: string,
    orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  public toString() {
    return `[
      id: ${this.id},
      title: ${this.title},
      orientetion: ${this.orientation},
    ]`;
  }
}

class Album {
  public id: number;
  public title: string;
  public pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'new Picture', PhotoOrientation.Landscape);
album.addPicture(picture);

console.log('album', album);

// Acces to public memebers

picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);