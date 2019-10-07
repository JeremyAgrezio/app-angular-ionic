import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  @Input() pager: boolean;
  @Input() options: any;
  @Input() images: [];

  constructor() {  
    // setTimeout(() => {
    //   console.log("Component options: " + JSON.stringify(this.options))
    //   console.log("Component pager: " + this.pager)
    //   console.log("Component images: " + this.images)
    // }, 1000);
   }

  ngOnInit() {}
}
