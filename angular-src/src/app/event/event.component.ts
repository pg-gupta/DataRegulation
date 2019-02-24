import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/Event';
import { EventService } from '../services/event.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private newDoc: Event;
  events: Event[];

  constructor(private eventServ: EventService,private router: Router) {
  }

  public getList() {
    this.eventServ.getAll().subscribe(result => {
      this.events=result;
  }, error => console.error(error));
}

public onSubmit() {
}

ngOnInit(){
  this.getList();
}
}
