import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.css'],
})
export class HomeOneComponent {
  constructor(private router: Router) {}
  gotoForm() {
    this.router.navigate(['form']);
  }
}
