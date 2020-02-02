import {NgModule} from '@angular/core';
import {ItemsComponent} from './items.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {
  MdButtonModule,
  MdCardModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSlideToggleModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ItemsRoutingModule} from './items-routing.module';
import {ServerService} from '../shared';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent
  ],
  imports: [
    MdCardModule,
    CommonModule,
    MdFormFieldModule,
    FormsModule,
    MdButtonModule,
    MdInputModule,
    MdSlideToggleModule,
    MdListModule,
    MdIconModule,
    HttpModule,
    HttpClientModule,
    ItemsRoutingModule
  ],
  exports: [
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent
  ],
  providers: [ServerService]
})
export class ItemsModule {
}
