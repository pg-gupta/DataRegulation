import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Document } from '../models/Document'

import 'rxjs/add/operator/map';

@Injectable()
export class DocService {

  constructor(private http: Http) { }

  //private serverApi= 'http://localhost:3000';
  private serverApi= 'http://dataregulation.azurewebsites.net/';


  public getAll():Observable<Document[]> {
    let URI = `${this.serverApi}/iitsummaries/`;
    return this.http.get(URI)
    .map(res => res.json())
    .map(res => <Document[]>res.lists);
  }

  public delete(listId : string) {
    let URI = `${this.serverApi}/iitsummaries/${listId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, {headers: headers})
    .map(res => res.json());
  }

  public get(listId : string):Observable<Document> {
    let URI = `${this.serverApi}/iitsummaries/${listId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.get(URI)
    .map(res => res.json())
    .map(res => <Document>res.item);
  }

  public add(list: Document) {
    let URI = `${this.serverApi}/iitsummaries/`;
    let headers = new Headers;
    let body = JSON.stringify({title: list.title, description: list.description, category: list.category});
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json());
  }

  public query(querystr : any):Observable<Document[]> {
    let URI = `${this.serverApi}/iitsummaries/query`;
    let body= JSON.stringify({querystr});
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');

    return this.http.post(URI,body,{headers: headers})
    .map(res => res.json())
    .map(res => <Document[]>res.lists);
  }
}
