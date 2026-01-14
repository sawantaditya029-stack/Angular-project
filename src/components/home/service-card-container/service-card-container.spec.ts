import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardContainer } from './service-card-container';

describe('ServiceCardContainer', () => {
  let component: ServiceCardContainer;
  let fixture: ComponentFixture<ServiceCardContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCardContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCardContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
