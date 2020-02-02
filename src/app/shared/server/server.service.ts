import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import { Item , Widget } from '..';
import 'rxjs/add/operator/map';

const header = new Headers({'content-type': 'application/json'});
const options = new RequestOptions({headers: header});

@Injectable()
export class ServerService {
  BASE_URL = 'http://localhost:3000/';
  URL: string;
  constructor(private http: Http) {
  }
  configService(model: string) {
    this.URL = this.BASE_URL + model + '/';
  }
  all() {
    return this.http.get(`${this.URL}`, options)
      .map(res => res.json());
  }

  load(id) {
    return this.http.get(`${this.URL}${id}`, options)
      .map(res => res.json());
  }

  createItem(item: Item) {
    return this.http.post(`${this.URL}`, JSON.stringify(item), options)
      .map(res => res.json());
  }

  createWidget(widget: Widget) {
    return this.http.post(`${this.URL}`, JSON.stringify(widget), options)
      .map(res => res.json());
  }

  updateItem(item: Item) {
    return this.http.patch(`${this.URL}${item.id}`, JSON.stringify(item), options)
      .map(res => res.json());
  }

  updateWidget(widget: Widget) {
    return this.http.patch(`${this.URL}${widget.id}`, JSON.stringify(widget), options)
      .map(res => res.json());
  }

  deleteItem(item: Item) {
    return this.http.delete(`${this.URL}${item.id}`)
      .map(res => res.json());
  }

  deleteWidget(widget: Widget) {
    return this.http.delete(`${this.URL}${widget.id}`)
      .map(res => res.json());
  }

  search(term: string) {
    const search = new URLSearchParams();
    search.set('q', term);
    return this.http.get(`${this.URL}`, {search})
      .map(res => res.json());
  }

}
