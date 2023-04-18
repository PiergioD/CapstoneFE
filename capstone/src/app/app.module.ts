import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// moduli
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// questi sono presenti nell uath module
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

//componenti
import { HomeComponent } from './components/home/home.component';
import { FormcreaComponent } from './components/scheda/formcrea/formcrea.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SchedaPagComponent } from './components/scheda/scheda-pag/scheda-pag.component';
import { SchedacardComponent } from './components/scheda/schedacard/schedacard.component';
import { FormCreaEseComponent } from './components/esercizio/form-crea-ese/form-crea-ese.component';
import { EsercizioCardComponent } from './components/esercizio/esercizio-card/esercizio-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
//import di ng-bootstrap
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { EsercizioModificaComponent } from './components/esercizio/esercizio-modifica/esercizio-modifica.component';
import { BackComponent } from './components/back/back.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FormcreaComponent,
    SchedacardComponent,
    SchedaPagComponent,
    FormCreaEseComponent,
    EsercizioCardComponent,
    EsercizioModificaComponent,
    BackComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    RouterModule,
    NgbCollapseModule,
    NgbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule.forRoot({ type: 'cog' }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
