import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class StorageService {

  db:SQLiteObject;

  constructor(private sqlite: SQLite) {

    // this.db = new SQLite();
    // this.db.openDatabase({
    //   name: 'baggr.db',
    //   location: 'default' // the location field is required
    //   }).then(() => {
    //     this.db.executeSql('CREATE TABLE IF NOT EXISTS statistics (id,date)', {}).then(() => {
    //       console.log("table statistics created");
    //     }, (err) => {
    //       console.error('Unable to execute sql: ', err);
    //     });
    //   }, (err) => {
    //     console.error('Unable to open database: ', err);
    //   });

    this.sqlite.create({
      'name': 'baggr.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      db.executeSql('CREATE TABLE IF NOT EXISTS statistics (id,date)', []).then(() => {
             console.log("table statistics created");
           }, (err) => {
             console.error('Unable to execute sql: ', err);
           });
    }).catch(e => console.log(e));
  }

  insertStatistic(drink_id:string, date:string) {
 		console.log("inserting statistics drink_id: "+drink_id+ " date: "+date);
 		this.db.executeSql('INSERT INTO statistics VALUES ("'+drink_id+'", date("now") )',[]).then(()=>{
      console.log("Statistic inserted");
    }, (err) => {
      console.error('Unable to insert statistic: ', err);
    });
 	}

  pad(num:number, size:number):string {
	    let s:string = "000000000" + num;
	    return s.substr(s.length-size);
	}

 	getDrinkStatistics():Promise<any> {
 		  let now = new Date();
  		let day = now.getDay(), diff = now.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  		let monday = new Date(now.setDate(diff));
  		let mondaySQL = monday.getFullYear() + "-"+this.pad(monday.getMonth()+1,2)+"-"+this.pad(monday.getDate(),2);
  		let SQL = 'SELECT id, count(id) as consumed,date FROM statistics WHERE date(date) >= date("'+mondaySQL+'") GROUP BY id,date';
 		return this.db.executeSql(SQL,[]);
 	}

}
