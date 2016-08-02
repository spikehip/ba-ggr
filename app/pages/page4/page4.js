import {Page, Modal, Platform, NavController, NavParams, ViewController, Toast, List} from 'ionic-angular';
import {Drinks} from '../../providers/drinks';
import {StatisticProvider} from '../../providers/statisticprovider';

@Page({
  templateUrl: 'build/pages/page4/page4.html'
})
export class Page4 {
	static get parameters() {
		return [[Drinks],[StatisticProvider],[NavController]];
	}

	constructor(drinksProvider, statisticProvider, navController) {
    this.nav = navController;
		this.statisticProvider = statisticProvider;
    this.drinksProvider = drinksProvider;
		let drinks = drinksProvider.getDrinks();

		drinks.sort(function(a,b){
			if (a.price > b.price) return 1;
			if (a.price < b.price) return -1;
			return 0;
		});

		this.drinks = drinks;
	}

  add() {
    let modal = Modal.create(EditDrinkModal);
    modal.onDismiss(data => {
      if (data.success == true) {
        let desc = this.getDescripton(data);
        let toast = Toast.create({
            message: desc+' hinzugefügt',
            duration: 3000
          });
        this.nav.present(toast);
      }
    });
    this.nav.present(modal);
  }

  edit(drink, item) {
    let modal = Modal.create(EditDrinkModal, drink);
    modal.onDismiss(data => {
      item.close();
      if (data.success == true) {
        let desc = this.getDescripton(data);
        let toast = Toast.create({
            message: desc+' wurde bearbeitet.',
            duration: 3000
          });
        this.nav.present(toast);
      }
    });
    this.nav.present(modal);
  }

  getDescripton(data) {
    return ((typeof data.description != 'undefined' && data.description.length>0)?data.description:'Getränk');
  }

  remove(drink) {
    this.drinksProvider.removeDrink(drink);
    let toast = Toast.create({
        message: this.getDescripton(drink)+' wurde erfolgreich entfernt',
        duration: 3000
      });
    this.nav.present(toast);
  }

}

@Page({
  templateUrl: 'build/pages/page4/add.html'
})
class EditDrinkModal {
  static get parameters() {
    return [[Platform],[NavParams],[ViewController],[Drinks]];
  }

  constructor(platform,params,viewCtrl, drinksProvider) {
      this.viewCtrl = viewCtrl;
      this.drinks = drinksProvider;
      if ( typeof params.data != 'undefined') {
        this.title = params.data.title;
        this.description = params.data.description;
        this.price = params.data.price;
        this.image = params.data.image;
        this.id = params.data.id;
      }
      if ( typeof this.id != 'undefined' ) {
        this.modalTitle = this.title+' bearbeiten';
      }
      else {
        this.modalTitle = 'Getränk hinzufügen';
      }
  }

  save() {
    if (typeof this.id!='undefined' && this.id.length > 0 ) {
      this.drinks.saveDrink(this.id, this.title, this.description, this.price, this.image);
    }
    else {
      this.drinks.addDrink(this.title, this.description, this.price, this.image);
    }
    this.viewCtrl.dismiss({success: true, description: this.description });
  }

  dismiss() {
    this.viewCtrl.dismiss({success: false});
  }
}
