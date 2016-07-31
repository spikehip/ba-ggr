import {Page} from 'ionic-angular';
import {Drinks} from '../../providers/drinks';
import {DatabaseProvider} from '../../providers/databaseprovider';
import {StatisticProvider} from '../../providers/statisticprovider';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
	static get parameters() {
		return [[Drinks],[DatabaseProvider],[StatisticProvider]];
	}

	constructor(drinks, database, statistic) {
		this.drinks = drinks.getDrinks();
		this.storage = database;
		this.statistic = statistic;
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
			this.statistic.collectStatForDrink(drink.id);
		});
		this.storage.get('balance').then((balance) => {
			this.storage.set('balance', balance - drink.price);	
			this.refresh();
		});
	}
 }
