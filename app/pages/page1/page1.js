import {Page, Storage, SqlStorage} from 'ionic-framework/ionic';
import {Drinks} from '../../providers/drinks';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
	static get parameters() {
		return [[Drinks]];
	}

	constructor(drinks) {
		this.drinks = drinks.getDrinks();
		this.storage = new Storage(SqlStorage, {name: 'baggr', backupFlag: SqlStorage.BACKUP_DOCUMENTS});
		this.refresh();
	};

	refresh() {
		this.storage.get('balance').then((balance) => {
			this.balance = balance == null?0:balance;
		});
		for(let i=0; i<this.drinks.length; i++) {
			let id = this.drinks[i].id;
			this.storage.get(this.drinks[i].id).then((consumed) => {
				this.drinks[i].consumed = Number(consumed);
			});
		}
	}

	remove(drink) {
		this.storage.get(drink.id).then((consumed) => {
			if(consumed == null) consumed=0;
			if (consumed > 0) {
				this.storage.set(drink.id, Number(consumed) - 1);				
				this.storage.get('balance').then((balance) => {
					this.storage.set('balance', Number(balance) + drink.price);	
					this.refresh();
				});			
			}
		});
	}

	add(drink) {
		this.storage.get(drink.id).then((consumed) => {
			if(consumed == null) consumed=0;
			this.storage.set(drink.id, Number(consumed) + 1);
		});
		this.storage.get('balance').then((balance) => {
			this.storage.set('balance', balance - drink.price);	
			this.refresh();
		});
	}
 }
