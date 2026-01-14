import { Component } from '@angular/core';
import { Banner } from '../../components/common/banner/banner';
import { ServiceCardContainer } from '../../components/home/service-card-container/service-card-container';
import { Industries } from '../../components/home/industries/industries';
import { CountUp } from '../../components/utils/count-up/count-up';
import { PriceTable } from '../../components/home/price-table/price-table';
import { ServicePage } from '../service-page/service-page';

@Component({
  selector: 'app-home-page',
  imports: [Banner, ServiceCardContainer, Industries, CountUp, PriceTable],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
