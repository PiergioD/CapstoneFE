import { Injectable } from '@angular/core';
import { Esercizio } from '../interfaces/esercizio';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { GruppiMuscolari } from '../interfaces/gruppi-muscolari';
@Injectable({
  providedIn: 'root',
})
export class EsercizioServiceService {
  URL: string = 'http://localhost:8080/api/capstone/esercizio';
  constructor(private http: HttpClient, private router: Router) {}

  getEsercizio(id: number) {
    const url = `${this.URL}/${id}`;
    return this.http.get<Esercizio>(url);
  }

  createEsercizio(newEse: Partial<Esercizio>, id: number) {
    return this.http.post(this.URL + `/scheda/${id}/create`, newEse);
  }

  deleteEsercizio(id: number) {
    return this.http.delete(`${this.URL}` + `/delete/${id}`);
  }

  modificaEsercizio(id: number, newEsercizio: Partial<Esercizio>) {
    return this.http.put(`${this.URL}` + `/update/${id}`, newEsercizio);
  }
}
