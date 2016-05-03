import {Injectable} from 'angular2/core';
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
}