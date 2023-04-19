import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { SchedaPagComponent } from './components/scheda/scheda-pag/scheda-pag.component';
import { EsercizioModificaComponent } from './components/esercizio/esercizio-modifica/esercizio-modifica.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'scheda/:id',
    component: SchedaPagComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modificaEsercizio/:id',
    component: EsercizioModificaComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
