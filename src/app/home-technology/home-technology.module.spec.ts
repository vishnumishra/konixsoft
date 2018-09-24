import { HomeTechnologyModule } from './home-technology.module';

describe('HomeTechnologyModule', () => {
  let homeTechnologyModule: HomeTechnologyModule;

  beforeEach(() => {
    homeTechnologyModule = new HomeTechnologyModule();
  });

  it('should create an instance', () => {
    expect(homeTechnologyModule).toBeTruthy();
  });
});
