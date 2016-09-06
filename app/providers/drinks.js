import {Injectable} from 'angular2/core';
import {DatabaseProvider} from './databaseprovider';

@Injectable()
export class Drinks {
    static get parameters() {
      return [[DatabaseProvider]];
    }

    constructor(database) {
        this.storage = database;
        this.drinks = [];
        this.refreshDrinksFromDatabase();
    }

    refreshDrinksFromDatabase() {
      this.storage.getDrinks().then((result) => {
        if (result.res.rows.length == 0) {
          console.log("Found no drinks in database, inserting default set of beverages.");
          let initial_drinks = [
              {
                  id: 'coffee',
                  image: 'img/coffee.jpg',
                  title: 'Kaffee',
                  description: 'Creme / Espresso',
                  price: 0.20,
                  consumed: 0
              },
              {
                  id: 'doublecoffee',
                  image: 'img/doublecoffee.jpg',
                  title: 'Creme / Espresso',
                  description: 'mit Milch',
                  price: 0.25,
                  consumed: 0
              },
              {
                  id: 'water',
                  image: 'img/water.jpg',
                  title: 'Wasser',
                  description: 'Eine Flasche Wasser',
                  price: 0.80,
                  consumed: 0
              },
              {
                  id: 'coke',
                  image: 'img/coke.jpg',
                  title: 'Coke',
                  description: 'Eine Flasche Cola',
                  price: 1.25,
                  consumed: 0
              },
              {
                  id: 'redbull',
                  image: 'img/redbull.jpg',
                  title: 'Red Bull',
                  description: 'Eine Flasche Red Bull',
                  price: 1.50,
                  consumed: 0
              }
          ];
          for(let i=0; i<initial_drinks.length; i++) {
            this.storage.addDrink(initial_drinks[i]);
            this.drinks.push(initial_drinks[i]);
          }
        }
        else {
          console.log("Found drinks in database");
          for(let i=0; i<result.res.rows.length; i++) {
            let drink = result.res.rows.item(i);
            this.drinks.push({id: drink.id,
              image: drink.image,
              title: drink.title,
              description: drink.description,
              price: drink.price,
              consumed: drink.consumed});
          }
        }
      });
    }

    getDrinks() {
        return this.drinks;
    }

    addDrink(title, description, price, image) {
      //TODO: generate ID
      console.debug(this.drinks);
      let id="drink_"+this.drinks.length + 1;
      let drink={id: id, image: image, title: title, description: description, price: Number(price), consumed: 0};
      this.drinks.push(drink);
      this.storage.addDrink(drink);
    }

    saveDrink(id, title, description, price, image) {
      //TODO: generate ID
      let i=this.getDrinkIndex(id);
      if ( i > -1 ) {
          this.drinks[i].title = title;
          this.drinks[i].description = description;
          this.drinks[i].price = Number(price);
          this.drinks[i].image = image;
          this.storage.updateDrink(this.drinks[i]);
      }
    }

    removeDrink(drink) {
      let index=this.drinks.indexOf(drink);
      if (index > -1) {
        this.drinks.splice(index, 1);
        this.storage.removeDrink(drink);
      }
    }

    getDrinkIndex(id) {
      let i=-1;
      this.drinks.forEach(function (drink, index) {
        if (drink.id == id) {
          i = index;
        }
      });

      return i;
    }

    consume(index, consumption) {
      this.drinks[index].consumed = consumption;
    }

}
