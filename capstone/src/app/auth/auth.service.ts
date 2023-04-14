import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Scheda } from '../interfaces/scheda';

export interface SignupData {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthData {
  accessToken: string;
  tokenType: string;

  roles: string[];
  email: string;
  id: number;
  name: string;
  username: string;
  schede: Scheda[];
}

export interface LoginData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  URL: string = 'http://localhost:8080';
  private authSubj = new BehaviorSubject<null | AuthData>(null);
  user$ = this.authSubj.asObservable();
  isLoggedIn$ = this.user$.pipe(map((user) => !!user));
  autoLogoutTimer: any;

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }

  login(data: LoginData) {
    return this.http.post<AuthData>(`${this.URL}/api/auth/login`, data).pipe(
      tap((response) => {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response));

        const expirationDate = this.jwtHelper.getTokenExpirationDate(
          response.accessToken
        ) as Date;
        this.autoLogout(expirationDate);

        this.authSubj.next(response);
      }),
      catchError(this.errors)
    );
  }

  signup(data: SignupData) {
    return this.http
      .post(`${this.URL}/api/auth/signup`, data)
      .pipe(catchError(this.errors));
  }

  logout() {
    this.authSubj.next(null); //segnalare al sito che non siamo più loggati
    this.router.navigate(['/login']);
    localStorage.removeItem('user'); //dimentichiamo il token per evitare autologin
    if (this.autoLogoutTimer) {
      clearTimeout(this.autoLogoutTimer);
    }
  }

  restoreUser() {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      return;
    }
    const user: AuthData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      return;
    }
    this.authSubj.next(user);
    const expirationDate = this.jwtHelper.getTokenExpirationDate(
      user.accessToken
    ) as Date;
    this.autoLogout(expirationDate);
  }

  autoLogout(expirationDate: Date) {
    //getTime da il valore della data in ms
    const expMs = expirationDate.getTime() - new Date().getTime(); //ms rimasti primache scada
    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, expMs);
  }

  private errors(err: any) {
    switch (err.error) {
      case 'Email and password are required':
        alert('Email e password sono obbligatorie');
        throw new Error('Email e password sono obbligatorie');
        break;
      case 'Email already exists':
        alert('Utente già registrato');
        return throwError('Utente già registrato');
        break;
      case 'Email format is invalid':
        alert('Email scritta male');
        return throwError('Email scritta male');
        break;
      case 'Cannot find user':
        alert("L'utente non esiste");
        return throwError("L'utente non esiste");
        break;
      default:
        //alert('Errore nella chiamata');
        return throwError('Errore nella chiamata');
        break;
    }
  }
}
