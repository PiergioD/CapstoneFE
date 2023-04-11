import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SchedaServiceService } from 'src/app/services/scheda-service.service';
import { Scheda } from 'src/app/interfaces/scheda';
import { AuthData, AuthService } from 'src/app/auth/auth.service';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user!: AuthData | null;
  sub!: Subscription;
  schedaArr!: Scheda[];

  constructor(
    private authServ: AuthService,
    private ss: SchedaServiceService
  ) {}

  ngOnInit(): void {
    this.authServ.user$.subscribe((user) => (this.user = user));

    this.caricaSchede(this.user?.username);
  }

  caricaSchede(username: string | undefined) {
    username = this.user?.username;
    this.sub = this.ss.getSchede(username).subscribe((ris) => {
      this.schedaArr = ris;
    });
  }
}
