import { Component } from '@angular/core';
import { PriceTableRow } from '../../utils/price-table-row/price-table-row';

@Component({
  selector: 'app-price-table',
  imports: [PriceTableRow],
  templateUrl: './price-table.html',
  styleUrl: './price-table.css',
})
export class PriceTable {

}
