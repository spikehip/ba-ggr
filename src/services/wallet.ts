export class Wallet {
  id:string;
  balance: number;

  constructor(public _balance: number) {
    this.balance = _balance;
  }

  setBalance(_balance:number) {
    this.balance = _balance;
  }

  getBalance():number {
    return this.balance;
  }

}
