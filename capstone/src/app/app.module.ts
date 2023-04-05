import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// moduli
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// questi sono presenti nell uath module
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

//componenti
import { HomeComponent } from './components/home/home.component';
import { FormcreaComponent } from './components/scheda/formcrea/formcrea.component';
import { EsercizioPagComponent } from './components/esercizio/esercizio-pag/esercizio-pag.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//import di ng-bootstrap
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SchedacardComponent } from './components/scheda/schedacard/schedacard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EsercizioPagComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FormcreaComponent,
    SchedacardComponent,
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
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
