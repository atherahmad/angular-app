import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Input() authorized:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
