import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';
import Holidays from 'date-holidays';

@Component({
  selector: 'app-calandrier',
  templateUrl: './calandrier.component.html',
  styleUrls: ['./calandrier.component.css']
})
export class CalandrierComponent implements OnInit {
  
  holidays: any[] = [];
  private hd: Holidays;
  calendarOptions: CalendarOptions;

  constructor() {
    this.hd = new Holidays('TN');
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, interactionPlugin],
      locales: [frLocale],
      locale: 'fr',
      dateClick: (arg) => this.handleDateClick(arg),
      events: [], // Will be populated in ngOnInit
      eventColor: '#ff69b4', // Default color for events
      eventTextColor: 'white', // Default text color for events
      eventBorderColor: '#ff1493', // Default border color for events
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth'
      },
      footerToolbar: {
        left: 'today',
        center: 'title',
        right: 'prev,next'
      }
    };
  }

  ngOnInit() {
    this.hd.setLanguages('fr');
    this.holidays = this.hd.getHolidays(new Date().getFullYear());

    this.calendarOptions.events = this.holidays.map(holiday => ({
      title: holiday.name,
      date: holiday.date,
      color: '#ff69b4', // Custom color for specific events
      borderColor: '#ff1493', // Custom border color for specific events
      textColor: 'white' // Custom text color for specific events
    }));
  }

  handleDateClick(arg: any) {
    alert('Date cliquée! ' + arg.dateStr);
  }
}
