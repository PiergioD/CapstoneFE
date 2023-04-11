import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GruppiMuscolari } from 'src/app/interfaces/gruppi-muscolari';
import { EsercizioServiceService } from 'src/app/services/esercizio-service.service';
import { Subscription } from 'rxjs';
import { Esercizio } from 'src/app/interfaces/esercizio';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-crea-ese',
  templateUrl: './form-crea-ese.component.html',
  styleUrls: ['./form-crea-ese.component.scss'],
})
export class FormCreaEseComponent {
  public isCollapsed = true;
  sub!: Subscription;
  esercizioForm!: FormGroup;
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
    private http: HttpClient,
    private se: EsercizioServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.esercizioForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descrizione: new FormControl(''),
      serie: new FormControl('0', Validators.required),
      ripetizioni: new FormControl('0', Validators.required),
      muscolo: new FormControl('', Validators.required),
    });
  }

  creaEsercizio() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    console.log(this.esercizioForm);
    this.se
      .createEsercizio(
        {
          //mi serve l'id???
          nome: this.esercizioForm.value.nome,
          descrizione: this.esercizioForm.value.descrizione,
          serie: this.esercizioForm.value.serie,
          ripetizioni: this.esercizioForm.value.ripetizioni,
          muscolo: this.esercizioForm.value.muscolo,
        },
        id
      )
      .subscribe((data) => {
        console.log(data);
        window.location.reload();
      });
  }
}
