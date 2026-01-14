import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AboutPage } from '../pages/about-page/about-page';
import { ServicePage } from '../pages/service-page/service-page';
import { ContactPage } from '../pages/contact-page/contact-page';
import { WebDevelopment } from '../pages/service-page/web-development/web-development';
import { MobileDevelopment } from '../pages/service-page/mobile-development/mobile-development';
import { DigitalMarketing } from '../pages/service-page/digital-marketing/digital-marketing';
import { OurServices } from '../pages/service-page/our-services/our-services';

export const routes: Routes = [


  {
    path: '',
    component: HomePage,
  },


  {
    path: 'about',
    component: AboutPage,
  },

 
  {
    path: 'services',
    component: ServicePage,
    children: [
      {
        path: '',
        component: OurServices,   
      },
      {
        path: 'web-development',
        component: WebDevelopment,
      },
      {
        path: 'mobile-development',
        component: MobileDevelopment,
      },
      {
        path: 'digital-marketing',
        component: DigitalMarketing,
      },
    ],
  },

  {
    path: 'contact',
    component: ContactPage,
  },


  {
    path: '**',
    redirectTo: '',
  },
];
