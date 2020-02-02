import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {ItemsModule} from '../items/items.module';
import {ServerService} from '../shared';
import {HomeRoutingModule} from './home-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {WidgetsModule} from '../widgets/widgets.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    HomeRoutingModule,
    ItemsModule,
    WidgetsModule,
  ],
  providers: [ServerService]
})
export class HomeModule {
}
