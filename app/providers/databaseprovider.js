import {Injectable} from 'angular2/core';
import {Storage, SqlStorage} from 'ionic-angular';

@Injectable()
export class DatabaseProvider {

    constructor(){
    	this.storage = new Storage(SqlStorage, {name: 'baggr', backupFlag: SqlStorage.BACKUP_DOCUMENTS});
    	//create statistics table
    	//CREATE TABLE IF NOT EXISTS statistics (id, date)
    	this.storage.query('CREATE TABLE IF NOT EXISTS statistics (id,date)');
      this.storage.query('CREATE TABLE IF NOT EXISTS drinks (id,image,title,description,price,consumed)');
    	console.log("Database Provider Initialized");
 	}

 	set(key, value) {
 		return this.storage.set(key, value);
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

  getDrinks() {
    return this.storage.query('SELECT * FROM drinks');
  }

  updateDrink(drink) {
    return this.storage.query('UPDATE drinks SET image="'+drink.image+'",title="'+drink.title+'", description="'+drink.description+'", price='+drink.price+' WHERE id="'+drink.id+'"');
  }

  updateDrinkConsumption(id, consumption) {
    return this.storage.query('UPDATE drinks SET consumed='+consumption+' WHERE id="'+id+'"');
  }

  addDrink(drink) {
    console.log("Ading drink", drink);
    return this.storage.query('INSERT INTO drinks VALUES ("'+drink.id+'", "'+drink.image+'", "'+drink.title+'", "'+drink.description+'", "'+drink.price+'", 0)');
  }
  removeDrink(drink) {
    return this.storage.query('DELETE FROM drinks WHERE id="'+drink.id+'"');
  }
}
