import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent {
  Events = [];
  calendarOptions: CalendarOptions = {
  // dateClick: this.handleDateClick.bind(this),
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
  };
  constructor() {}

  ngOnInit() {}


}
