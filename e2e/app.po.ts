export class WhoPaysNextPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('who-pays-next-app h1')).getText();
  }
}
