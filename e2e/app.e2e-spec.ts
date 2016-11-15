import { GsheetsReaderPage } from './app.po';

describe('gsheets-reader App', function() {
  let page: GsheetsReaderPage;

  beforeEach(() => {
    page = new GsheetsReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
