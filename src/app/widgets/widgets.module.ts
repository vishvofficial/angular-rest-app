import {NgModule} from '@angular/core';
import {WidgetsComponent} from './widgets.component';
import {WidgetsListComponent} from './widgets-list/widgets-list.component';
import {WidgetDetailsComponent} from './widget-details/widget-details.component';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSlideToggleModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {WidgetsRoutingModule} from './widgets-routing.module';
import {ServerService} from '../shared';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailsComponent
  ],
  imports: [
    CommonModule,
    MdCardModule,
    MdFormFieldModule,
    MdInputModule,
    MdButtonModule,
    FormsModule,
    MdSlideToggleModule,
    MdListModule,
    MdIconModule,
    HttpModule,
    HttpClientModule,
    WidgetsRoutingModule
  ],
  exports: [
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailsComponent
  ],
  providers: [ServerService]
})
export class WidgetsModule {
  constructor() {

  }
}
