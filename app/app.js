import 'reflect-metadata';
import { App, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { Drinks } from './providers/drinks';
import { StatisticProvider } from './providers/statisticprovider';
import { DatabaseProvider } from './providers/databaseprovider';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Drinks, StatisticProvider, DatabaseProvider],
  config: {}
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
      StatusBar.styleDefault();
    });
  }
}
