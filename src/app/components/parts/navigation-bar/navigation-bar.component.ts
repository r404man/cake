import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  showNav = false;
  isOpen = false;
  constructor() { }

  navToggler() {
    this.showNav = !this.showNav;
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

}
