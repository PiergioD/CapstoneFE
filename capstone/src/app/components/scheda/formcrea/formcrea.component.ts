import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SchedaServiceService } from 'src/app/services/scheda-service.service';
import { Scheda } from 'src/app/interfaces/scheda';

@Component({
  selector: 'app-formcrea',
  templateUrl: './formcrea.component.html',
  styleUrls: ['./formcrea.component.scss'],
})
export class FormcreaComponent {
  public isCollapsed = true;
  sub!: Subscription;
  schedaArr!: Scheda[];

  constructor(private schedaSer: SchedaServiceService) {}

  recuperaScheda() {
    this.sub = this.schedaSer.loadSchede().subscribe((ris) => console.log(ris));
  }
}
