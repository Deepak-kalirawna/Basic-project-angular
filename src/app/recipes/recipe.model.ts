// For how one recipe structure looks like
export class Recipe {
  //public for access
  public name: string;
  public description: string;
  public imagePath: string;
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
