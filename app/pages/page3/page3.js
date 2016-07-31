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

		this.statsAvailable = drinks[0].consumed > 0;
		statisticProvider.getWeeklyStatStatus().then((weekly) => {
			this.stats2Available = weekly == null?false:(weekly=="on"?true:false);
			if ( this.stats2Available ) {
				this.drawWeeklyStat();
			}
		});
		statisticProvider.getBadges().then((badges) => {
			this.stats3Available = badges == null?false:(badges=="on"?true:false);
		});

	}

	drawWeeklyStat() {
		let sp = this.statisticProvider;
		sp.getDrinkStatistics().then((result) => {
      let weeklyDatasets = {};
      for(var i=0;i<result.res.rows.length;i++) {
        //console.debug(result.res.rows.item(i));
        let id=result.res.rows.item(i).id;
        let dataset = typeof weeklyDatasets[id] == 'undefined'?{}:weeklyDatasets[id];
        if (typeof dataset.label == 'undefined') {
          dataset.label = id;
          dataset.data = [0, 0, 0, 0, 0];
        }
        let consumed = result.res.rows.item(i).consumed;
        let date = new Date(result.res.rows.item(i).date);
        let position = date.getDay()==0?6:date.getDay()-1;
        if ( position >= 0 && position <= 4 ) {
          dataset.data[position] = consumed;
          weeklyDatasets[id] = dataset;
        }
      }
      return weeklyDatasets;
    }).then((weeklyDatasets) => {
      let dataset = [];
      this.drinks.forEach(function(drink, index) {
        let ds = {};
        if ( typeof weeklyDatasets[drink.id] != 'undefined' ) {
          ds.data = weeklyDatasets[drink.id].data;
          ds.label = drink.title;
          dataset.push(ds);
        }
      });
      if ( dataset.length == 0) {
        this.notEnoughChartData = true;
      }
      else {
        this.notEnoughChartData = false;
        Chart.defaults.global.responsive = false;
    		Chart.defaults.global.legend.display = true;
    		Chart.defaults.global.tooltips.enabled = false;

    		let ctx = document.getElementById("myChart");
    		if (typeof this.myChart == 'undefined') {
    			this.myChart = new Chart(ctx, {
    			    type: 'line',
    			    data: {
    			        labels: ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],
    			        datasets: dataset
    			    },
    			    options: {
    			        scales: {
    			            display: false
    			        }
    			    }
    			});
    		}
    		else {
    			this.myChart.update(1000,true);
    		}
      }
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
		this.drawWeeklyStat();
	}

	weeklyOff() {
		this.statisticProvider.setWeeklyStatStatus(false);
		this.stats2Available = false;
	}

}
