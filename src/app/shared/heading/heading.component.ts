import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  @Input() boxColor: string = "";
  @Input() headingText: string = "";
  constructor() { }

  ngOnInit() {
  console.log(this.headingText, "in shared heading")
  }


}
