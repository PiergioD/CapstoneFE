import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SchedaServiceService } from 'src/app/services/scheda-service.service';
import { Scheda } from 'src/app/interfaces/scheda';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Esercizio } from 'src/app/interfaces/esercizio';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formcrea',
  templateUrl: './formcrea.component.html',
  styleUrls: ['./formcrea.component.scss'],
})
export class FormcreaComponent {
  public isCollapsed = true;
  sub!: Subscription;

  constructor(
    private ss: SchedaServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  // prende il valore del form e crea una nuova scheda
  creaNuovaScheda(f: NgForm) {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.ss.createScheda(f.value, id).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });
  }
}
