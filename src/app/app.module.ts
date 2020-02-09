import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HealthService} from './services/health-service/health.service';
import { HealthComponent } from './components/health/health.component';
import {GaugeChartModule} from 'angular-gauge-chart';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GaugeChartModule
  ],
  providers: [HealthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
