import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTableRow } from './price-table-row';

describe('PriceTableRow', () => {
  let component: PriceTableRow;
  let fixture: ComponentFixture<PriceTableRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceTableRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceTableRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
