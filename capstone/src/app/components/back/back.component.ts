import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss'],
})
export class BackComponent {
  constructor(private location: Location, private as: AuthService) {}
  goBack() {
    this.location.back();
  }

  logOut() {
    this.as.logout();
  }
}
