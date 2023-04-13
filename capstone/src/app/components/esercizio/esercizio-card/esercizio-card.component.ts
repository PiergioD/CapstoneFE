import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { SchedaServiceService } from 'src/app/services/scheda-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Scheda } from 'src/app/interfaces/scheda';
import { Subscription } from 'rxjs';
import { Esercizio } from 'src/app/interfaces/esercizio';
import { EsercizioServiceService } from 'src/app/services/esercizio-service.service';
import AOS from 'aos';
@Component({
  selector: 'app-esercizio-card',
  templateUrl: './esercizio-card.component.html',
  styleUrls: ['./esercizio-card.component.scss'],
})
export class EsercizioCardComponent {
  sub!: Subscription;

  arrEsercizi: Esercizio[] | undefined;

  constructor(
    private ss: SchedaServiceService,
    private es: EsercizioServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    AOS.init();
    this.prendiEsercizio();
  }

  prendiEsercizio() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.ss.getSchedaSingola(id).subscribe((post) => {
      console.log(post);
      return (this.arrEsercizi = post.esercizi);
    });
  }

  cancellaEsercizio(id: number) {
    this.sub = this.es.deleteEsercizio(id).subscribe(() => {
      this.arrEsercizi = this.arrEsercizi?.filter((post) => post.id != id);
      console.log(`esercizio con ${id} cancellato!`);
    });
  }
}
