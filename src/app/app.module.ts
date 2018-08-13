import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartBarComponent } from './charts/chart-bar/chart-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
