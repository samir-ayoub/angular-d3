import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartBarComponent } from './charts/chart-bar/chart-bar.component';
import { ChartLineComponent } from './charts/chart-line/chart-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartBarComponent,
    ChartLineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
