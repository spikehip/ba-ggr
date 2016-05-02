import {Page} from 'ionic-framework/ionic';
import {Drinks} from '../../providers/drinks';
import {StatisticProvider} from '../../providers/statisticprovider';

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
	static get parameters() {
		return [[Drinks],[StatisticProvider]];
	}

	constructor(drinksProvider, statisticProvider) {
		this.statisticProvider = statisticProvider;


		let drinks = drinksProvider.getDrinks().slice();

		drinks.sort(function(a,b){
			if (a.consumed > b.consumed) return -1;
			if (a.consumed < b.consumed) return 1;
			return 0;
		});

		this.drinks = drinks;
		this.statsAvailable = drinks[0].consumed > 0;
		this.stats2Available = false;
		this.stats3Available = statisticProvider.getBadges().then((badges) => {
			this.stats3Available = badges == null?false:(badges=="on"?true:false);
		});
	}

	badgesOn() {
		this.statisticProvider.setBadges(true);
		this.stats3Available = true;
	}

	badgesOff() {
		this.statisticProvider.setBadges(false);
		this.stats3Available = false;
	}

}
