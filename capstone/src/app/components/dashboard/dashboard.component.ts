import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SchedaServiceService } from 'src/app/services/scheda-service.service';
import { Scheda } from 'src/app/interfaces/scheda';
import { AuthData, AuthService } from 'src/app/auth/auth.service';
import { Type } from '@angular/compiler';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private ss: SchedaServiceService,
    private location: Location,
    private spinner: NgxSpinnerService
  ) {}

  // nell ngOniti cè lo spinner e setta l'user nel componente
  ngOnInit(): void {
    this.spinner.show();
    this.authServ.user$.subscribe((user) => (this.user = user));

    this.caricaSchede(this.user?.username);
  }

  // con la sub prendo dal service le schede dello user tramite il nome e setto l'array su cui fare ngfor
  caricaSchede(username: string | undefined) {
    username = this.user?.username;
    this.sub = this.ss.getSchede(username).subscribe((ris) => {
      this.schedaArr = ris;
      this.spinner.hide();
    });
  }
}
