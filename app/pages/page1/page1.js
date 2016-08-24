import {Page} from 'ionic-angular';
import {Drinks} from '../../providers/drinks';
import {DatabaseProvider} from '../../providers/databaseprovider';
import {StatisticProvider} from '../../providers/statisticprovider';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
	static get parameters() {
		return [[Drinks],[DatabaseProvider],[StatisticProvider]];
	}

	constructor(drinks, database, statistic) {
    this.drinksProvider = drinks;
		this.drinks = drinks.getDrinks();
		this.storage = database;
		this.statistic = statistic;
		this.refresh();
	};

	refresh() {
		this.storage.get('balance').then((balance) => {
			this.balance = balance == null?0:balance;
		});
	}

	remove(drink) {
    let consumed = 0;
    let index=this.drinksProvider.getDrinkIndex(drink.id);
    if( index> -1 ) {
      consumed = Number(this.drinks[index].consumed) - 1;
      if (consumed > 0 ) {
        this.drinksProvider.consume(index, consumed);
        this.storage.updateDrinkConsumption(drink.id, consumed ).then((result) => {
            this.statistic.collectStatForDrink(drink.id);
            return drink;
        }).then((result) => {
          this.storage.get('balance').then((balance) => {
            this.storage.set('balance', Number(balance) + Number(result.price)).then((result) => {
              this.refresh();
            });
          });
        });
      }
    }
	}

	add(drink) {
    let consumed = 0;
    let index=this.drinksProvider.getDrinkIndex(drink.id);
    if (index > -1) {
      consumed = Number(this.drinks[index].consumed) +1;
      //this.drinks[index].consumed = consumed;
      this.drinksProvider.consume(index, consumed);
      this.storage.updateDrinkConsumption(drink.id, consumed ).then((result) => {
          this.statistic.collectStatForDrink(drink.id);
          return drink;
      }).then((result) => {
        this.storage.get('balance').then((balance) => {
          this.storage.set('balance', balance - result.price).then((result) => {
            this.refresh();
          });
        });
      });
    }
	}
 }
