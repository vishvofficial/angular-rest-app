import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'items', loadChildren: './items/items.module#ItemsModule'},
  {path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule'},
  {path: 'reviews', loadChildren: './reviews/reviews.module#ReviewsModule'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
