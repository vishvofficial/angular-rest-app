import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Widget} from '../../shared';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent implements OnInit {
  selectedWidget: Widget;
  originalName: string;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  @Input() set widget(value: Widget){
    if (value) {
      this.originalName = value.name;
    }
    this.selectedWidget = Object.assign({}, value);
  }

}
