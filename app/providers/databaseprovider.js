import {Injectable} from 'angular2/core';
import {Storage, SqlStorage} from 'ionic-framework/ionic';

@Injectable()
export class DatabaseProvider {

    constructor(){
    	console.log("Database Provider Initialized");
    	this.storage = new Storage(SqlStorage, {name: 'baggr', backupFlag: SqlStorage.BACKUP_DOCUMENTS});
 	}

 	set(key, value) {
 		this.storage.set(key, value);	
 	}

 	get(key) {
 		return this.storage.get(key);
 	}
}