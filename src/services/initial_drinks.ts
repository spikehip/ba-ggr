export class InitialDrinks {
  getList() {
   return [
       {
           id: 'coffee',
           image: 'img/coffee.jpg',
           title: 'Kaffee',
           description: 'Creme / Espresso',
           price: 0.50,
           consumed: 0
       },
       {
           id: 'water',
           image: 'img/water.jpg',
           title: 'Wasser',
           description: 'Eine Flasche Wasser',
           price: 0.80,
           consumed: 0
       }
   ];
  }
}
