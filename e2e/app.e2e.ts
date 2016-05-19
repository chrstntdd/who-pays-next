import { WhoPaysNextPage } from './app.po';

describe('who-pays-next App', function() {
  let page: WhoPaysNextPage;

  beforeEach(() => {
    page = new WhoPaysNextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('who-pays-next works!');
  });
});
