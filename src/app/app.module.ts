import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActuatorService } from './services/actuator-service/actuator.service';
import { HealthComponent } from './components/health/health.component';
import { GaugeChartModule } from 'angular-gauge-chart';
import { EndpointCategoryComponent } from './components/endpoint-category/endpoint-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    EndpointCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GaugeChartModule
  ],
  providers: [ActuatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
