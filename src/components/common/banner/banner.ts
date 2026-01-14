import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() ctaBtnText!: string;
  @Input() ctaRoute!: string;
  @Input() bgImg!: string;
  constructor(private route:Router) {}

  ClickHandler() {
    this.route.navigateByUrl(this.ctaRoute)
  }
}
