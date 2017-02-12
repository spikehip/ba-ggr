import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DrinkService } from '../../services/drinks';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage implements OnInit {
  drinks:Array<any>;
  drinkService:DrinkService;
  statsAvailable:boolean;
  stats2Available:boolean;
  notEnoughChartData:boolean;

  ngOnInit() {
    this.drinkService.getDrinks().then((result) => {
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

  constructor(public navCtrl: NavController,public _drinkService:DrinkService) {
    this.drinks = [];
    this.drinkService=_drinkService;
    this.statsAvailable=false;
    this.stats2Available=false;
    this.notEnoughChartData=false;
  }

  refresh() {

  }

  weeklyOn() {

  }

  weeklyOff() {

  }

}
