import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { TiranitarComponent } from './Tierra/Tiranitar/tiranitar.component';
import { ButtonModule} from 'primeng/button';
import { TrampinchComponent } from './Tierra/trampinch/trampinch.component';
import { RfcComponent } from './Generador/rfc/rfc.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    TiranitarComponent,
    TrampinchComponent,
    RfcComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
