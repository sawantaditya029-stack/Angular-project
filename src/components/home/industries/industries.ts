import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-industries',
  imports: [CommonModule],
  templateUrl: './industries.html',
  styleUrl: './industries.css',
})
export class Industries {
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
