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
		let drinks = drinksProvider.getDrinks().slice();

		drinks.sort(function(a,b){
			if (a.consumed > b.consumed) return -1;
			if (a.consumed < b.consumed) return 1;
			return 0;
		});

		this.drinks = drinks;
		this.statsAvailable = drinks[0].consumed > 0;
		this.stats2Available = false;
		this.stats3Available = false;

	}
}
