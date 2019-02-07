import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Document } from '../models/Document'

import 'rxjs/add/operator/map';

@Injectable()
export class DocService {

  constructor(private http: Http) { }

  // private serverApi= 'http://localhost:3000';
  private serverApi= 'http://dataregulationrepository.azurewebsites.net/';


  public getAll():Observable<Document[]> {
    let URI = `${this.serverApi}/documents/`;
    return this.http.get(URI)
    .map(res => res.json())
    .map(res => <Document[]>res.docs);
  }

  public delete(listId : string) {
    let URI = `${this.serverApi}/documents/${listId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, {headers: headers})
    .map(res => res.json());
  }

  public get(listId : string):Observable<Document> {
    let URI = `${this.serverApi}/documents/${listId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.get(URI)
    .map(res => res.json())
    .map(res => <Document>res.doc);
  }

  public add(list: Document) {
    let URI = `${this.serverApi}/documents/`;
    let headers = new Headers;
    let body = JSON.stringify({title: list.title, abstract: list.abstract});
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json());
  }

  public query(querystr : any):Observable<Document[]> {
    let URI = `${this.serverApi}/documents/query`;
    let body= JSON.stringify({querystr});
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');

    return this.http.post(URI,body,{headers: headers})
    .map(res => res.json())
    .map(res => <Document[]>res.docs);
  }
}
