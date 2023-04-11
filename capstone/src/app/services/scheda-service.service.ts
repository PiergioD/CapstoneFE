import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { Scheda } from '../interfaces/scheda';

@Injectable({
  providedIn: 'root',
})
export class SchedaServiceService {
  URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) {}

  getSchede(username: string | undefined) {
    return this.http.get<Scheda[]>(
      this.URL + `/api/capstone/utente/scheda/${username}`
    );
  }

  getSchedaSingola(id: number) {
    const url = `${this.URL}/api/capstone/scheda/${id}`;
    return this.http.get<Scheda>(url);
  }

  deleteScheda(id: number) {
    return this.http.delete(`${this.URL}/api/capstone/scheda` + `/${id}`);
  }
}
