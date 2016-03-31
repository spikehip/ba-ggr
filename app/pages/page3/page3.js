import {Page, Storage, SqlStorage} from 'ionic-framework/ionic';
import {Drinks} from '../../providers/drinks';

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
	static get parameters() {
		return [[Drinks]];
	}

	constructor(drinksProvider) {
		this.storage = new Storage(SqlStorage, {name: 'baggr', backupFlag: SqlStorage.BACKUP_DOCUMENTS});
		this.drinks = drinksProvider.getDrinks();
		this.topName = "";
		this.topCount = 0;

		for(let i=0; i<this.drinks.length; i++) {
			this.storage.get(this.drinks[i].id).then((consumed) => {
				if (consumed >= this.topCount) {
					this.topCount = consumed;					
					this.topName = this.drinks[i].title;
				}
			});
		}
	}
}
