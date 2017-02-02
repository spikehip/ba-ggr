import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RechnerPage } from '../pages/rechner/rechner';
import { GuthabenPage } from '../pages/guthaben/guthaben';
import { StatsPage } from '../pages/stats/stats';
import { EinstellungenPage } from '../pages/einstellungen/einstellungen';
import { TabsPage } from '../pages/tabs/tabs';
import { AddDrinkPage } from '../pages/einstellungen/add/add';

import { BalanceService } from '../services/balance';
import { DrinkService } from '../services/drinks';
import { StorageService } from '../services/storage';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    RechnerPage,
    GuthabenPage,
    StatsPage,
    EinstellungenPage,
    TabsPage,
    AddDrinkPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RechnerPage,
    GuthabenPage,
    StatsPage,
    EinstellungenPage,
    TabsPage,
    AddDrinkPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BalanceService,
    DrinkService,
    StorageService,
    Storage
  ]
})
export class AppModule {}
