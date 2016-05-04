import {Page} from 'ionic-framework/ionic';
import {Drinks} from '../../providers/drinks';
import {StatisticProvider} from '../../providers/statisticprovider';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Page({
  templateUrl: 'build/pages/page3/page3.html',
  directives: [CHART_DIRECTIVES]
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
		statisticProvider.getWeeklyStatStatus().then((weekly) => {
			this.stats2Available = weekly == null?false:(weekly=="on"?true:false);
			this.chartData = [
				[drinks[0].consumed, drinks[1].consumed, drinks[2].consumed],
				[drinks[2].consumed, drinks[1].consumed, drinks[0].consumed]
			];
			this.chartLabels = [drinks[0].name, drinks[1].name, drinks[3].name];
			this.chartSeries = [drinks[0].name, drinks[1].name, drinks[3].name];
			this.chartLegend = false;
			this.chartType = "Doughnout";
		});
		statisticProvider.getBadges().then((badges) => {
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

	weeklyOn() {
		this.statisticProvider.setWeeklyStatStatus(true);
		this.stats2Available = true;
	}

	weeklyOff() {
		this.statisticProvider.setWeeklyStatStatus(false);
		this.stats2Available = false;
	}

}
