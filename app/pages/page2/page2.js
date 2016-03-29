import {Page, Storage, SqlStorage} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
	constructor() {
		this.storage = new Storage(SqlStorage, {name: 'baggr', backupFlag: SqlStorage.BACKUP_DOCUMENTS});
		this.storage.get('balance').then((balance) => {
			console.debug(balance);
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
		let drinks = ['coffee', 'doublecoffee', 'water', 'coke', 'redbull'];
		for (let i=0; i<drinks.length; i++) {
			this.storage.set(drinks[i], 0);
		}
	}

}
