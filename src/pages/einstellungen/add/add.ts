import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Drink } from '../../../services/drink';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddDrinkPage {

  modalTitle:string = "Getränk hinzufügen";
  viewCtrl:ViewController;
  drink:Drink;

  constructor(public params: NavParams,public _viewCtrl: ViewController) {
    this.viewCtrl = _viewCtrl;
    this.drink = new Drink({});
    let item = params.get('drink');
    if (item != null ) {
      this.modalTitle = item.title+' bearbeiten';
      this.drink.id = item.id;
      this.drink.image = item.image;
      this.drink.title = item.title;
      this.drink.description = item.description;
      this.drink.price = item.price;
    }
  }

  save() {
    this.viewCtrl.dismiss({success:true, drink: this.drink});
  }

  dismiss() {    
    this.viewCtrl.dismiss({success: false, drink: this.drink});
  }

}
