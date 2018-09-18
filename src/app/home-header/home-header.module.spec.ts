import { HomeHeaderModule } from './home-header.module';

describe('HomeHeaderModule', () => {
  let homeHeaderModule: HomeHeaderModule;

  beforeEach(() => {
    homeHeaderModule = new HomeHeaderModule();
  });

  it('should create an instance', () => {
    expect(homeHeaderModule).toBeTruthy();
  });
});
