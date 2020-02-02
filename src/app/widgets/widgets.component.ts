import { Component, OnInit } from '@angular/core';
import {Widget, ServerService} from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[];
  selectedWidget: Widget;
  readonly = true;

  constructor(private widgetsService: ServerService) {
    this.widgetsService.configService(`widgets`);
  }

  ngOnInit() {
    this.getWidgets();
    this.resetCurrentWidget();
  }

  resetCurrentWidget() {
    this.selectedWidget = {id: null, name: '', description: ''};
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  cancel() {
    this.resetCurrentWidget();
  }

  getWidgets() {
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
  }

  saveWidget(widget) {
    if (!widget.id) {
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }

  execute(widget: Widget, action: string) {
    this.widgetsService[action](widget)
      .subscribe(() => {
        this.getWidgets();
        this.resetCurrentWidget();
      })
  }

  createWidget(widget) {
    this.execute(widget, 'createWidget');
  }

  updateWidget(widget) {
    this.execute(widget, 'updateWidget');
  }

  deleteWidget(widget) {
    this.execute(widget, 'deleteWidget');
  }
}
