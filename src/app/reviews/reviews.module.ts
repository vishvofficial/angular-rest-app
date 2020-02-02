import {NgModule} from '@angular/core';
import {ReviewsComponent} from './reviews.component';
import {ReviewsRoutingModule} from './reviews-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    HttpModule,
    HttpClientModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule {
}
