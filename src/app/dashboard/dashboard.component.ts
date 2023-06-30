import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logOut() {
    let confirmation = confirm('Are you sure to exit dashboard');
    if (confirmation) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
}
