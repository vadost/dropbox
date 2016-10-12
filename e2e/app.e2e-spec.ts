import { DropboxPage } from './app.po';

describe('dropbox App', function() {
  let page: DropboxPage;

  beforeEach(() => {
    page = new DropboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('db works!');
  });
});
