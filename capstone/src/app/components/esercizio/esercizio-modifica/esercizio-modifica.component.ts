import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Esercizio } from 'src/app/interfaces/esercizio';
import { ActivatedRoute, Router } from '@angular/router';
import { EsercizioServiceService } from 'src/app/services/esercizio-service.service';
import { LocationStrategy } from '@angular/common';
import { Location } from '@angular/common';
import { GruppiMuscolari } from 'src/app/interfaces/gruppi-muscolari';
@Component({
  selector: 'app-esercizio-modifica',
  templateUrl: './esercizio-modifica.component.html',
  styleUrls: ['./esercizio-modifica.component.scss'],
})
export class EsercizioModificaComponent {
  sub!: Subscription;
  esercizio!: Esercizio;

  // qui metot lenum che mi srvirà a fare le options del select
  enumGruppi = [
    { value: GruppiMuscolari.Addominali, label: 'Addominali' },
    { value: GruppiMuscolari.Bicipiti, label: 'Bicipiti' },
    { value: GruppiMuscolari.Dorso, label: 'Dorso' },
    { value: GruppiMuscolari.Gambe, label: 'Gambe' },
    { value: GruppiMuscolari.Petto, label: 'Petto' },
    { value: GruppiMuscolari.Polpacci, label: 'Polpacci' },
    { value: GruppiMuscolari.Spalle, label: 'Spalle' },
    { value: GruppiMuscolari.Tricipiti, label: 'Tricipiti' },
  ];

  constructor(
    private se: EsercizioServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.prendiEsercizio();
  }

  prendiEsercizio() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.se.getEsercizio(id).subscribe((post) => {
      console.log(post);
      return (this.esercizio = post);
    });
  }

  submit() {
    if (this.esercizio) {
      this.se
        .modificaEsercizio(this.esercizio.id, this.esercizio)
        .subscribe(() => {
          alert('Esercizio Modificato');
          this.location.back();
        });
    }
    return console.log(':)');
  }
}
