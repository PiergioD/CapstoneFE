import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(f: NgForm) {
    this.as.login(f.value).subscribe((res) => {
      this.router.navigate(['dashboard']);
    });
  }
}
