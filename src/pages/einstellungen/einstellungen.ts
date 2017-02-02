import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DrinkService } from '../../services/drinks';
import { Drink } from '../../services/drink';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddDrinkPage } from './add/add';

@Component({
  selector: 'page-einstellungen',
  templateUrl: 'einstellungen.html'
})
export class EinstellungenPage {

  drinks:Array<any>;
  nav:NavController;
  toastController:ToastController;
  drinkService:DrinkService;
  modalController:ModalController;

  constructor(public navCtrl: NavController,public _drinkService:DrinkService, public toastCtrl: ToastController,public modalCtrl: ModalController) {
    this.nav = navCtrl;
    this.toastController = toastCtrl;
    this.modalController=modalCtrl;
    this.drinks = [];
    this.drinkService = _drinkService;
    _drinkService.getDrinks().then((result) => {
      this.drinks = result;
    });
  }

  add() {
    let modal = this.modalController.create(AddDrinkPage, {drink: null});
    modal.onDidDismiss(data => {
     if (data.success && data.drink.id == null && data.drink.price > 0) {
      let id="drink_"+this.drinks.length + 1;
      data.drink.id=id;
      data.drink.consumed=0;
      this.drinks.push(data.drink);
      this.drinkService.saveDrinks(this.drinks).then(()=>{
        let toast = this.toastController.create({
          message: (data.drink.description)+' wurde hinzugefügt',
          duration: 3000
        });
        toast.present();
      });
     }
    });
    modal.present();
  }

  edit(drink:Drink, item:any) {
    let modal = this.modalController.create(AddDrinkPage, {drink: drink});
    modal.onDidDismiss(data => {
      if (data.success && data.drink.id != null) {
        for(let i=0; i<this.drinks.length; i++) {
          if (this.drinks[i].id == data.drink.id) {
            this.drinks[i].image = data.drink.image;
            this.drinks[i].title = data.drink.title;
            this.drinks[i].price = data.drink.price;
            this.drinks[i].description = data.drink.description;
            this.drinkService.saveDrinks(this.drinks).then(()=>{
              let toast = this.toastController.create({
                message: (data.drink.description)+' wurde bearbeitet',
                duration: 3000
              });
              toast.present();
            });
            break;
          }
        }
      }
    });
    modal.present();
    item.close();
  }

  remove(drink:Drink, item:any){
    //this.drinksProvider.removeDrink(drink);
    let index = this.drinks.indexOf(drink);
    if (index > -1 ) {
      this.drinks.splice(index, 1);
      this.drinkService.saveDrinks(this.drinks).then(()=>{
        let toast = this.toastController.create({
          message: (drink.description)+' wurde erfolgreich entfernt',
          duration: 3000
        });
        toast.present();
      });
    }
    item.close();
  }

}
