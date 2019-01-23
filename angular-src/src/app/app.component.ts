import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IIT One Stop';
  public researchTab;
  public eventsTab;


  constructor() {
    this.researchTab= {'isClicked':true};
    this.eventsTab= {'isClicked':false};
  }

  researchActive() {
    if(!this.researchTab.isClicked){
      this.researchTab.isClicked=true;
      this.eventsTab.isClicked=false;
    }
  };

  EventsAndConferenceActive() {
    if(!this.eventsTab.isClicked){
      this.eventsTab.isClicked=true;
      this.researchTab.isClicked=false;
    }
  };

}
