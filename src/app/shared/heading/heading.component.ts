import { Component, Input, OnInit } from '@angular/core';
import { HeadingService } from './heading.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  

  @Input() boxColor: string;
  @Input() headingText: string;
    
  constructor(private headingService:HeadingService) { }

  ngOnInit() {
  }


}
