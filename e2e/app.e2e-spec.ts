import { BranchManagementPage } from './app.po';

describe('branch-management App', () => {
  let page: BranchManagementPage;

  beforeEach(() => {
    page = new BranchManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
