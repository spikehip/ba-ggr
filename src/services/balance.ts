import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Wallet } from './wallet';

@Injectable()
export class BalanceService {

  storage:Storage;

  constructor(public _storage:Storage) {
    this.storage = _storage;
  }

  getWallet(): Promise<Wallet> {
    return this.storage.get('balance').then((value) => {
      return new Wallet(value);
    });
  }

  setBalance(newBalance:number): Promise<any> {
    return this.storage.set('balance', newBalance);
  }
}
