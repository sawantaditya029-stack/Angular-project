import { Component } from '@angular/core';
import { Banner } from '../../../components/common/banner/banner';
import { CountUp } from '../../../components/utils/count-up/count-up';

@Component({
  selector: 'app-web-development',
  imports: [Banner,CountUp],
  templateUrl: './web-development.html',
  styleUrl: './web-development.css',
})
export class WebDevelopment {

}
