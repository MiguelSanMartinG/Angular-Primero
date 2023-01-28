import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TiranitarComponent } from './Tierra/Tiranitar/tiranitar.component';
import { ButtonModule} from 'primeng/button';
import { TrampinchComponent } from './Tierra/trampinch/trampinch.component';
import { GeneradorModule } from './Generador/generador.module';
import { ContadorModule } from './contador/contador.module';
import { TorterraComponent } from './Tierra/torterra/torterra.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './Tierra/personajes/personajes.component';


@NgModule({
  declarations: [
    AppComponent,
    TiranitarComponent,
    TrampinchComponent,
    TorterraComponent,
    PersonajesComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    GeneradorModule,
    ContadorModule,
    TableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
