import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EndpointCategoryComponent} from './components/endpoint-category/endpoint-category.component';
import {HealthComponent} from './components/health/health.component';
import {HomePageComponent} from './components/home-page/home-page.component';


const routes: Routes = [
  // {path: 'endpoint/:id', component: EndpointCategoryComponent},
  {path: 'endpoint', component: EndpointCategoryComponent},
  {path: 'health', component: HealthComponent},
  {path: '', component: HomePageComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
