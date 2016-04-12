import {Page, Storage, SqlStorage} from 'ionic-framework/ionic';
import {Drinks} from '../../providers/drinks';

@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
	static get parameters() {
		return [[Drinks]];
	}

	constructor(drinks) {
		this.drinks = drinks.getDrinks();
		this.storage = new Storage(SqlStorage, {name: 'baggr', backupFlag: SqlStorage.BACKUP_DOCUMENTS});
		this.storage.get('balance').then((balance) => {
			this.balance = Number(balance == null?0:balance);
		});		
	}

	setBalance() {
		if ( Number(this.newBalance) > 0) {
			this.balance = Number(this.newBalance);
			this.storage.set('balance', this.newBalance);				
		}
	}

	addExtra() {
		if ( Number(this.newBalance) > 0 ) {
			this.balance = Number(this.balance) + Number(this.newBalance);
			this.storage.set('balance', this.balance);
		}
	}

	reset() {
		this.balance = 0;
		this.storage.set('balance', 0);
		for (let i=0; i<this.drinks.length; i++) {
			this.storage.set(this.drinks[i].id, 0);
		}
	}

}
