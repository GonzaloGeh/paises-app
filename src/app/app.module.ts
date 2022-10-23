import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgxEchartsModule} from "ngx-echarts";

import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {PaisModule} from "./pais/pais.module";
import {RouterModule} from "@angular/router";
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';



@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PaisModule,
    RouterModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
