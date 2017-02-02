import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DrinkService } from '../../services/drinks';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  drinks:Array<any>;
  statsAvailable:boolean;
  stats2Available:boolean;
  notEnoughChartData:boolean;

  constructor(public navCtrl: NavController,public _drinkService:DrinkService) {
    this.drinks = [{title:'',consumed: 0},{title:'',consumed:0},{title:'',consumed:0}];
    this.statsAvailable=false;
    this.stats2Available=false;
    this.notEnoughChartData=false;
    _drinkService.getDrinks().then((result) => {
      this.drinks = result.slice();
      this.drinks.sort(function(a,b){
        if (a.consumed > b.consumed) return -1;
        if (a.consumed < b.consumed) return 1;
        return 0;
      });
      if (this.drinks[0].consumed > 0) {
        this.statsAvailable=true;
      }
    });
  }

  refresh() {

  }

  weeklyOn() {

  }

  weeklyOff() {

  }

}
