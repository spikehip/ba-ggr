import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Wallet } from './wallet';

@Injectable()
export class BalanceService {

  storage:NativeStorage;

  constructor(public _storage:NativeStorage) {
    this.storage = _storage;
  }

  getWallet(): Promise<Wallet> {
    return this.storage.getItem('balance').then((value) => {
      return new Wallet(value);
    });
  }

  setBalance(newBalance:number): Promise<any> {
    return this.storage.setItem('balance', newBalance);
  }
}
