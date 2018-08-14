import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartBarComponent } from './charts/chart-bar/chart-bar.component';
import { ChartLineComponent } from './charts/chart-line/chart-line.component';
import { ChartScatterPlotComponent } from './charts/chart-scatter-plot/chart-scatter-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartBarComponent,
    ChartLineComponent,
    ChartScatterPlotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
