import { Component } from '@angular/core';
import { Banner } from '../../../components/common/banner/banner';
import { CommonModule } from '@angular/common';
import { CountUp } from '../../../components/utils/count-up/count-up';

@Component({
  selector: 'app-our-services',
  imports: [Banner,CommonModule,CountUp],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css',
})
export class OurServices {
  INDUSTRIES = [
    { icon: 'bi-rocket-takeoff', title: 'Startups & Entrepreneurs' },
    { icon: 'bi-shop', title: 'SMEs' },
    { icon: 'bi-buildings', title: 'Corporate & Enterprises' },
    { icon: 'bi-cart', title: 'E-commerce & Retail' },

    { icon: 'bi-heart-pulse', title: 'Healthcare & Wellness' },
    { icon: 'bi-mortarboard', title: 'Education & E-Learning' },
    { icon: 'bi-house-door', title: 'Real Estate & Construction' },
    { icon: 'bi-bank', title: 'Finance & FinTech' },

    { icon: 'bi-laptop', title: 'IT, Software & SaaS' },
    { icon: 'bi-building-gear', title: 'Manufacturing & Industrial' },
    { icon: 'bi-truck', title: 'Logistics & Transportation' },
    { icon: 'bi-airplane', title: 'Travel & Hospitality' },

    { icon: 'bi-film', title: 'Media & Entertainment' },
    { icon: 'bi-building', title: 'Government & Public Sector' },
    { icon: 'bi-leaf', title: 'Agriculture & AgriTech' },
    { icon: 'bi-lightning-charge', title: 'Energy & Sustainability' },
  ];
}

