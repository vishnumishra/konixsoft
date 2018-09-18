import { HomeCarouselModule } from './home-carousel.module';

describe('HomeCarouselModule', () => {
  let homeCarouselModule: HomeCarouselModule;

  beforeEach(() => {
    homeCarouselModule = new HomeCarouselModule();
  });

  it('should create an instance', () => {
    expect(homeCarouselModule).toBeTruthy();
  });
});
