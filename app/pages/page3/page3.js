import {Page} from 'ionic-angular';
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
		
		let drinkLabels = [];
		let drinkConsumed = [];
		drinks.forEach(function(drink){
			console.debug(drink);
			drinkLabels.push(drink.title);
			drinkConsumed.push(drink.consumed);
		});

		this.statsAvailable = drinks[0].consumed > 0;
		statisticProvider.getWeeklyStatStatus().then((weekly) => {
			this.stats2Available = weekly == null?false:(weekly=="on"?true:false);
			if ( this.stats2Available ) {
				Chart.defaults.global.responsive = false;
				let ctx = document.getElementById("myChart");
				let myChart = new Chart(ctx, {
				    type: 'line',
				    data: {
				        labels: drinkLabels,
				        datasets: [{
				            label: '# of Votes',
				            data: drinkConsumed
				        },
				        {
				        	label: '# other',
				        	data: [10, 1,5,3,4]
				        }]
				    },
				    options: {
				        scales: {
				            display: false
				        }
				    }
				});
				//myChart.render(1000, false);
				//let img=myChart.toBase64Image();
				//console.debug(img);
			}
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
