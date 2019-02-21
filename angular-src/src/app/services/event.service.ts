import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Event } from '../models/Event';

import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  // private serverApi= 'http://localhost:3000';
  private serverApi= 'https://dataregulationrepository.azurewebsites.net/';

  public getAll():Observable<Event[]> {
    let URI = `${this.serverApi}/events/`;
    return this.http.get(URI)
    .map(res => res.json())
    .map(res => <Event[]>res.events);
  }

  public delete(id : string) {
    let URI = `${this.serverApi}/events/${id}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, {headers: headers})
    .map(res => res.json());
  }

  public get(id : string):Observable<Event> {
    let URI = `${this.serverApi}/events/${id}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.get(URI)
    .map(res => res.json())
    .map(res => <Event>res.item);
  }

  public add(event: Event) {
    let URI = `${this.serverApi}/events/`;
    let headers = new Headers;
    let body = JSON.stringify({name: event.title, age: event.abstract});
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json());
  }
}
