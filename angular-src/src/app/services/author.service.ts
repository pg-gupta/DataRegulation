import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Author } from '../models/Author'

import 'rxjs/add/operator/map';

@Injectable()
export class AuthorService {

  constructor(private http: Http) { }

  //private serverApi= 'http://localhost:3000';
  private serverApi= 'http://dataregulationrepository.azurewebsites.net/';

  public getAll():Observable<Author[]> {
    let URI = `${this.serverApi}/authors/`;
    return this.http.get(URI)
    .map(res => res.json())
    .map(res => <Author[]>res.authors);
  }

  public delete(id : string) {
    let URI = `${this.serverApi}/authors/${id}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, {headers: headers})
    .map(res => res.json());
  }

  public get(id : string):Observable<Author> {
    let URI = `${this.serverApi}/authors/${id}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.get(URI)
    .map(res => res.json())
    .map(res => <Author>res.item);
  }

  public add(author: Author) {
    let URI = `${this.serverApi}/authors/`;
    let headers = new Headers;
    let body = JSON.stringify({name: author.name, age: author.age});
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json());
  }
}
