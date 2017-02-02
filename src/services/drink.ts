export class Drink {
  id: string;
  image: string;
  title: string;
  description; string;
  price: number;
  consumed: number;

  constructor(public obj: any) {
    this.id = obj.id;
    this.image = obj.image;
    this.title = obj.title;
    this.description = obj.description;
    this.price = Number(obj.price);
    this.consumed = Number(obj.consumed);
  }

}
