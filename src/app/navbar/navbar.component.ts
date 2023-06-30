import { Component,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('navBurger', { static: false }) navBurger?: ElementRef;
  @ViewChild('navMenu', { static: false }) navMenu?: ElementRef;

  toggleNavbar() {
    if (this.navBurger && this.navMenu) {
      this.navBurger.nativeElement.classList.toggle('is-active');
      this.navMenu.nativeElement.classList.toggle('is-active');
    }
  }
}
