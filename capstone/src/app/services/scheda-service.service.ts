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

  loadSchede() {
    return this.http
      .get<Scheda[]>(`${this.URL}/api/capstone/scheda/page/0/nome`)
      .pipe(map((ris) => ris));
  }
}
