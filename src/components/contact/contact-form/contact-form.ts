import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactSrv } from '../../../services/contact-srv';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm implements OnInit {
  contactForm!: FormGroup;
  constructor(private contactsrv:ContactSrv){}
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      about_project: new FormControl(''),
    });
  }
  submitHandler() {
   if (this.contactForm.valid) {
    this.contactsrv.sendMessage(this.contactForm.value).subscribe((res:any)=> {
      console.log("data submitted!")
    })
   }
  }
}
