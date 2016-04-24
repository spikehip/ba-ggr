import {Injectable} from 'angular2/core';
import {Storage, SqlStorage} from 'ionic-framework/ionic';

@Injectable()
export class StatisticProvider {

    constructor(){
    	console.log("Statistic Provider Initialized");
    	this.storage = new Storage(SqlStorage, {name: 'baggr', backupFlag: SqlStorage.BACKUP_DOCUMENTS});
 	}

 	setBadges(state) {
 		this.storage.set('badges', state?"on":"off");	
 	}

 	getBadges() {
 		return this.storage.get('badges');
 	}
}