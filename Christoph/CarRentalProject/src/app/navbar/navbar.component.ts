import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  donate: number = 0;
  constructor() {}

  donate10() {
    this.donate += 10;
  }

  ngOnInit(): void {}
}
