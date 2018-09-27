import { ServiceOfferedModule } from './service-offered.module';

describe('ServiceOfferedModule', () => {
  let serviceOfferedModule: ServiceOfferedModule;

  beforeEach(() => {
    serviceOfferedModule = new ServiceOfferedModule();
  });

  it('should create an instance', () => {
    expect(serviceOfferedModule).toBeTruthy();
  });
});
