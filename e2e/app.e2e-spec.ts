import { POCAngularPage } from './app.po';

describe('pocangular App', () => {
  let page: POCAngularPage;

  beforeEach(() => {
    page = new POCAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
