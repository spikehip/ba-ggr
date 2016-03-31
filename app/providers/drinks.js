import {Injectable} from 'angular2/core';
 
@Injectable()
export class Drinks {
    constructor(){
 
        this.drinks = [
            {
                id: 'coffee',
                image: 'img/coffee.jpg',
                title: 'Kaffee',
                description: 'Creme / Espresso',
                price: 0.20,
                consumed: 1
            },
            {
                id: 'doublecoffee',
                image: 'img/doublecoffee.jpg',
                title: 'Creme / Espresso',
                description: 'mit Milch',
                price: 0.25,
                consumed: 2
            },
            {
                id: 'water',
                image: 'img/water.jpg',
                title: 'Wasser',
                description: 'Eine Flasche Wasser',
                price: 0.70,        
                consumed: 3
            },
            {
                id: 'coke',
                image: 'img/coke.jpg',
                title: 'Coke',
                description: 'Eine Flasche Cola',
                price: 1.25,    
                consumed: 4
            },
            {
                id: 'redbull',
                image: 'img/redbull.jpg',
                title: 'Red Bull',
                description: 'Eine Flasche Red Bull',
                price: 1.50,                
                consumed: 5
            }
        ];
 
    }
 
    getDrinks() {
        return this.drinks; 
    }
 
}