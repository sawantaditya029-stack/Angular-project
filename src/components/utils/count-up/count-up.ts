import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-up',
  imports: [],
  templateUrl: './count-up.html',
  styleUrl: './count-up.css',
})
export class CountUp implements OnInit {
  @Input() limit!: string;
  @Input() speed!: string;
  count: number = 0;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.countHandler();
  }
  countHandler() {
    const id = setInterval(() => {
      if (this.count < Number(this.limit)) {
        this.count++;
        this.cdr.detectChanges();
      } else {
        clearInterval(id);
      }
    }, Number(this.speed));
  }
}
