import {Page,Storage, SqlStorage} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
	constructor() {
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
				price: 0.70,		
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
