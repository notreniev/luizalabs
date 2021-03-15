import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be Desafio Luiza Labs', async () => {
    page.navigateTo();
    expect(await page.getParagraphText()).toContain('Desafio Luiza Labs');
  });
});
