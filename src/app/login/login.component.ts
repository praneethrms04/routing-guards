import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userid = 1;
  constructor(private router: Router) {}

  login() {
    localStorage.setItem('token', Math.random().toString());
    this.router.navigate(['dashboard']);
  }
  gotoHome() {
    this.router.navigate(['']);
  }
}
