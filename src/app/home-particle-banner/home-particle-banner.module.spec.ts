import { HomeParticleBannerModule } from './home-particle-banner.module';

describe('HomeParticleBannerModule', () => {
  let homeParticleBannerModule: HomeParticleBannerModule;

  beforeEach(() => {
    homeParticleBannerModule = new HomeParticleBannerModule();
  });

  it('should create an instance', () => {
    expect(homeParticleBannerModule).toBeTruthy();
  });
});
