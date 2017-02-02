import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DrinkService } from '../../services/drinks';
import { Drink } from '../../services/drink';
import { StorageService } from '../../services/storage';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-rechner',
  templateUrl: 'rechner.html'
})
export class RechnerPage {

  drinks:Array<any>;
  balance:number;
  store:Storage;
  sql:StorageService;
  drinkService:DrinkService;
  calculating:boolean = false;

  constructor(public navCtrl: NavController, public _drinkService:DrinkService, public sqlStorage:StorageService, public keyValueStore: Storage) {
    this.balance = 0;
    this.drinks = [];
    this.sql  = sqlStorage;
    this.store = keyValueStore;
    this.drinkService=_drinkService;
    _drinkService.getDrinks().then((result) => {
      this.drinks = result;
    });
    this.refresh();
  }

  refresh() {
    this.calculating = true;
    this.store.get('balance').then((value) => {
      this.balance = value;
      this.calculating = false;
    });
  }

  remove(drink:Drink) {
    if (drink.consumed > 0) {
      this.calculating = true;
      this.store.get('balance').then((value) => {
        this.balance = value;
        let newBalance:string = Number(this.balance + drink.price).toFixed(2);
        drink.consumed = drink.consumed - 1;
        this.balance = Number(newBalance);
        this.store.set('balance', this.balance);
        this.drinkService.saveDrinks(this.drinks).then(()=>{
          this.calculating = false;
        });
      });
    }
  }

  add(drink:Drink) {
    this.calculating = true;
    this.store.get('balance').then((value) => {
      this.balance = value;
      let newBalance:string = Number(this.balance - drink.price).toFixed(2);
      drink.consumed = drink.consumed + 1;
      this.balance = Number(newBalance);
      this.store.set('balance', this.balance);
      this.drinkService.saveDrinks(this.drinks).then(()=> {
        this.calculating = false;
      });
    });
  }

}
