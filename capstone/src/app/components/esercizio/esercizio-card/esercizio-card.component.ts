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
import { GruppiMuscolari } from 'src/app/interfaces/gruppi-muscolari';

@Component({
  selector: 'app-esercizio-card',
  templateUrl: './esercizio-card.component.html',
  styleUrls: ['./esercizio-card.component.scss'],
})
export class EsercizioCardComponent {
  sub!: Subscription;
  // TODO
  // muscles: Record<GruppiMuscolari, Esercizio[]> | undefined = undefined;
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

  // metodo per prendere gli esercizi dall 'id della scheda passata con la route
  prendiEsercizio() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.ss.getSchedaSingola(id).subscribe((post) => {
      /* METODO PER REDUCE MA SONO SOLO RIUSCITO A FARE UNA GET,NON SONO RIUSCITO AD IMPLEMENTARE IL RESTANTE CRUD
      this.muscles = post.esercizi.reduce((acc, current) => {
        if (!acc[current.muscolo]) {
          acc[current.muscolo] = [];
        }
        acc[current.muscolo].push(current);
        return acc;
      }, {} as Record<GruppiMuscolari, Esercizio[]>);
      console.log(this.muscles);

      */

      // riordino in base al enum
      this.arrEsercizi = post.esercizi.sort((a, b) =>
        a.muscolo < b.muscolo ? -1 : 1
      );
      console.log(this.arrEsercizi);
    });
  }

  // metodo per cancellare l'esercizio dall'array tramite id
  cancellaEsercizio(id: number) {
    this.sub = this.es.deleteEsercizio(id).subscribe(() => {
      this.arrEsercizi = this.arrEsercizi?.filter((ese) => ese.id != id);
      console.log(`esercizio con ${id} cancellato!`);
    });
  }
}
