import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SchedaServiceService } from 'src/app/services/scheda-service.service';
import { Scheda } from 'src/app/interfaces/scheda';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Esercizio } from 'src/app/interfaces/esercizio';
@Component({
  selector: 'app-formcrea',
  templateUrl: './formcrea.component.html',
  styleUrls: ['./formcrea.component.scss'],
})
export class FormcreaComponent {
  public isCollapsed = true;

  constructor(
    private ss: SchedaServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}
}
