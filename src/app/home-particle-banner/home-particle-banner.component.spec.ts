import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParticleBannerComponent } from './home-particle-banner.component';

describe('HomeParticleBannerComponent', () => {
  let component: HomeParticleBannerComponent;
  let fixture: ComponentFixture<HomeParticleBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeParticleBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeParticleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
