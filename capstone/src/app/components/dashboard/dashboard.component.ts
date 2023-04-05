import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SchedaServiceService } from 'src/app/services/scheda-service.service';
import { Scheda } from 'src/app/interfaces/scheda';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
