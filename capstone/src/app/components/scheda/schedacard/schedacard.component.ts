import { Component } from '@angular/core';
import { Scheda } from 'src/app/interfaces/scheda';
import { Input } from '@angular/core';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { AuthData } from 'src/app/auth/auth.service';
import { AuthService } from 'src/app/auth/auth.service';
import { SchedaServiceService } from 'src/app/services/scheda-service.service';
import AOS from 'aos';

@Component({
  selector: 'app-schedacard',
  templateUrl: './schedacard.component.html',
  styleUrls: ['./schedacard.component.scss'],
})
export class SchedacardComponent {
  user!: AuthData | null;
  sub!: Subscription;
  schede!: Scheda[];

  constructor(
    private authServ: AuthService,
    private ss: SchedaServiceService
  ) {}
  ngOnInit() {
    this.authServ.user$.subscribe((user) => (this.user = user));
    this.caricaSchede(this.user?.username);
    AOS.init();
  }

  caricaSchede(username: string | undefined) {
    username = this.user?.username;
    this.sub = this.ss.getSchede(username).subscribe((ris) => {
      this.schede = ris;
    });
  }
}
