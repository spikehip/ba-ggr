import {Injectable} from 'angular2/core';

@Injectable()
export class Drinks {
    constructor(){

        this.drinks = [
            {
                id: 'coffee',
                image: 'img/coffee.jpg',
                title: 'Kaffee',
                description: 'Creme / Espresso',
                price: 0.20,
                consumed: 1
            },
            {
                id: 'doublecoffee',
                image: 'img/doublecoffee.jpg',
                title: 'Creme / Espresso',
                description: 'mit Milch',
                price: 0.25,
                consumed: 2
            },
            {
                id: 'water',
                image: 'img/water.jpg',
                title: 'Wasser',
                description: 'Eine Flasche Wasser',
                price: 0.80,
                consumed: 3
            },
            {
                id: 'coke',
                image: 'img/coke.jpg',
                title: 'Coke',
                description: 'Eine Flasche Cola',
                price: 1.25,
                consumed: 4
            },
            {
                id: 'redbull',
                image: 'img/redbull.jpg',
                title: 'Red Bull',
                description: 'Eine Flasche Red Bull',
                price: 1.50,
                consumed: 5
            }
        ];

    }

    getDrinks() {
        return this.drinks;
    }

    addDrink(title, description, price, image) {
      //TODO: generate ID
      let id="drink_"+this.drinks.count+1;
      this.drinks.push({id: id, image: image, title: title, description: description, price: price, consumed: 0});
    }

    saveDrink(id, title, description, price, image) {
      //TODO: generate ID
      let i=-1;
      this.drinks.forEach(function (drink, index) {
        if (drink.id == id) {
          i = index;
        }
      });
      if ( i > -1 ) {
          this.drinks[i].title = title;
          this.drinks[i].description = description;
          this.drinks[i].price = price;
          this.drinks[i].image = image;
      }
    }

    removeDrink(drink) {
      let index=this.drinks.indexOf(drink);
      if (index > -1) {
        this.drinks.splice(index, 1);
      }
    }

}
