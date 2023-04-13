import { Component } from '@angular/core';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { Scheda } from 'src/app/interfaces/scheda';
import { SchedaServiceService } from 'src/app/services/scheda-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-scheda-pag',
  templateUrl: './scheda-pag.component.html',
  styleUrls: ['./scheda-pag.component.scss'],
})
export class SchedaPagComponent {
  sub!: Subscription;
  scheda: Scheda | undefined;

  constructor(
    private ss: SchedaServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
  }

  ngOnInit() {
    this.prendiScheda();
  }

  prendiScheda() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.ss.getSchedaSingola(id).subscribe((post) => {
      console.log(post);
      this.spinner.hide();
      return (this.scheda = post);
    });
  }
}
