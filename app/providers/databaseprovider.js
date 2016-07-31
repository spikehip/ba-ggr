import {Injectable} from 'angular2/core';
import {Storage, SqlStorage} from 'ionic-angular';

@Injectable()
export class DatabaseProvider {

    constructor(){
    	this.storage = new Storage(SqlStorage, {name: 'baggr', backupFlag: SqlStorage.BACKUP_DOCUMENTS});
    	//create statistics table
    	//CREATE TABLE IF NOT EXISTS statistics (id, date)
    	this.storage.query('CREATE TABLE IF NOT EXISTS statistics (id,date)');
    	console.log("Database Provider Initialized");
 	}

 	set(key, value) {
 		this.storage.set(key, value);
 	}

 	get(key) {
 		return this.storage.get(key);
 	}

 	insertStatistic(drink_id, date) {
 		console.log("inserting statistics drink_id: "+drink_id+ " date: "+date);
 		this.storage.query('INSERT INTO statistics VALUES ("'+drink_id+'", date("now") )');
 	}

	pad(num, size) {
	    let s = "000000000" + num;
	    return s.substr(s.length-size);
	}

 	getDrinkStatistics() {
 		  let now = new Date();
  		let day = now.getDay(), diff = now.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  		let monday = new Date(now.setDate(diff));
  		let mondaySQL = monday.getFullYear() + "-"+this.pad(monday.getMonth()+1,2)+"-"+this.pad(monday.getDate(),2);
  		let SQL = 'SELECT id, count(id) as consumed,date FROM statistics WHERE date(date) >= date("'+mondaySQL+'") GROUP BY id,date';
 		return this.storage.query(SQL);
 	}
}
