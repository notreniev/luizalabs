import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  async getParagraphText() {
    browser.waitForAngularEnabled(true);
    return await element(by.tagName('app-root ion-title')).getText();
  }
}
