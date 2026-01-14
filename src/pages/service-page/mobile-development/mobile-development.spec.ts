import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDevelopment } from './mobile-development';

describe('MobileDevelopment', () => {
  let component: MobileDevelopment;
  let fixture: ComponentFixture<MobileDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
