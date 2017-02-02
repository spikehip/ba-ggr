import { Injectable } from '@angular/core';
import { Drink } from './drink';
import { InitialDrinks } from './initial_drinks'
import { Storage } from '@ionic/storage';

@Injectable()
export class DrinkService {

  drinks:Array<Drink> = [];
  storage:Storage;

  constructor(public _storage:Storage) {
    this.storage = _storage;
    this.storage.get('drinks').then((json) => {
      let data = JSON.parse(json);
      console.log("Loading drinks from storage: ",json);
      if (data == null || (data != null && data.length <= 0) ) {
        data = new InitialDrinks().getList();
      }
      for(let i=0; i<data.length; i++) {
        let drink:Drink = new Drink(data[i]);
        this.drinks.push(drink);
      }
      console.log("finished initializing drinks provider");
    });
  }

  getDrinks(): Promise<Drink[]> {
    return Promise.resolve(this.drinks);
  }

  saveDrinks(drinks:Drink[]): Promise<any> {
    return this.storage.set('drinks', JSON.stringify(drinks));
  }
}
