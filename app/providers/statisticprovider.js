import {Injectable} from '@angular/core';
import {DatabaseProvider} from './databaseprovider';

@Injectable()
export class StatisticProvider {
	static get parameters() {
		return [[DatabaseProvider]];
	}

    constructor(database){
    	console.log("Statistic Provider Initialized");
    	this.storage = database;
 	}

 	setBadges(state) {
 		this.storage.set('badges', state?"on":"off");
 	}

 	getBadges() {
 		return this.storage.get('badges');
 	}

 	getWeeklyStatStatus() {
 		return this.storage.get('weekly');
 	}

 	setWeeklyStatStatus(state) {
 	this.storage.set('weekly', state?"on":"off");
 	}

 	collectStatForDrink(drink_id) {
 		this.getWeeklyStatStatus().then((status) => {
 			if ( (status == null?false:(status=="on"?true:false)) ) {
 				let now = new Date();
 				let today = now.getFullYear() + "-"+(now.getMonth()+1)+"-"+now.getDate();
 				this.storage.insertStatistic(drink_id, today);
 			}
 		});
 	}

 	getDrinkStatistics() {
 		return this.storage.getDrinkStatistics();
 	}
}
