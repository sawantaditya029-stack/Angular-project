import { Component } from '@angular/core';
import { Banner } from '../../components/common/banner/banner';
import { ContactInfo } from '../../components/contact/contact-info/contact-info';
import { ContactForm } from '../../components/contact/contact-form/contact-form';

@Component({
  selector: 'app-contact-page',
  imports: [Banner, ContactInfo, ContactForm],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

}
