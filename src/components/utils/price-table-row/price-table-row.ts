import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-table-row',
  imports: [],
  templateUrl: './price-table-row.html',
  styleUrl: './price-table-row.css',
})
export class PriceTableRow {
  @Input() service!: string;
  @Input() beginner!: string;
  @Input() professional!: string;
  @Input() primium!: string;
}
