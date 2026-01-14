import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-card-container',
  imports: [CommonModule],
  templateUrl: './service-card-container.html',
  styleUrl: './service-card-container.css',
})
export class ServiceCardContainer {
  cards: any[] = [
    {
      icon: 'bi-gear',
      title: 'Website Development',
      description: 'As one of the trusted website development companies in Pune, we build fast, responsive, and SEO-friendly websites that convert visitors into customers.'
    },
    {
      icon: 'bi-laptop',
      title: 'Mobile Application Development',
      description: 'We develop secure, scalable, and high-performance mobile applications for Android and iOS tailored to your business needs.'
    },
    {
      icon: 'bi-people-fill',
      title: 'Digital Marketing',
      description: 'Our data-driven digital marketing strategies help you increase online visibility, generate quality leads, and grow your business.'
    },
  ];
}
