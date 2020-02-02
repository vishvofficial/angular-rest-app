import { Component, OnInit } from '@angular/core';
import {Item, ServerService, Widget} from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: Widget[];

  constructor(private fetchService: ServerService) {
  }

  ngOnInit() {
    this.getItems();
    this.getWidgets();
  }

  getItems() {
    this.fetchService.configService(`items`);
    this.fetchService.all()
      .subscribe(items => this.items = items);
  }

  getWidgets() {
    this.fetchService.configService(`widgets`);
    this.fetchService.all()
      .subscribe(widgets => this.widgets = widgets);
  }
}
