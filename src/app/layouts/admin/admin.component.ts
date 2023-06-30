import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router: Router) {}
  gotoHome() {
    this.router.navigate(['admin', 'home']);
  }
  gotoProfile() {
    this.router.navigate(['admin', 'profile']);
  }
  gotoLogOut() {
    this.router.navigate(['auth', 'signin']);
  }
}
