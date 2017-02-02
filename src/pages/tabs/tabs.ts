import { Component } from '@angular/core';

import { RechnerPage } from '../rechner/rechner';
import { GuthabenPage } from '../guthaben/guthaben';
import { StatsPage } from '../stats/stats';
import { EinstellungenPage } from '../einstellungen/einstellungen';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RechnerPage;
  tab2Root: any = GuthabenPage;
  tab3Root: any = StatsPage;
  tab4Root: any = EinstellungenPage;

  constructor() {

  }
}
