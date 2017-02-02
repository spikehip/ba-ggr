import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DrinkService } from '../../services/drinks';

@Component({
  selector: 'page-guthaben',
  templateUrl: 'guthaben.html'
})
export class GuthabenPage {
  balance:number;
  newBalance:number;
  store:Storage;
  drinkService:DrinkService;

  constructor(public navCtrl: NavController, public keyValueStore: Storage,public _drinkService:DrinkService) {
    this.store = keyValueStore;
    this.newBalance=0;
    this.drinkService=_drinkService;
    this.store.get('balance').then((value) => {
      this.balance = value;
    });
  }

  refresh() {
    this.store.get('balance').then((value) => {
      this.balance = value;
    });
  }

  addExtra() {
    this.store.get('balance').then((value) => {
      this.balance = value;
      let oldBalanceString:string = Number(this.balance).toFixed(2);
      let oldBalanceNumber:number = Number(oldBalanceString);
      let newBalanceString:string = Number(this.newBalance).toFixed(2);
      let newBalanceNumber:number = Number(newBalanceString);
      this.balance = oldBalanceNumber + newBalanceNumber;
      this.store.set('balance', this.balance);
    });
  }

  setBalance() {
    this.balance = this.newBalance;
    this.store.set('balance', this.balance);
  }

  reset() {
    this.balance = 0;
    this.store.set('balance', this.balance);
    this.drinkService.getDrinks().then((drinks) => {
      for(let i=0; i<drinks.length; i++) {
        drinks[i].consumed = 0;
      }
      this.drinkService.saveDrinks(drinks);
    });
  }

}
