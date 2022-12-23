import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TiranitarComponent } from './Tierra/Tiranitar/tiranitar.component';
import { ButtonModule} from 'primeng/button';
import { TrampinchComponent } from './Tierra/trampinch/trampinch.component';
import { GeneradorModule } from './Generador/generador.module';
import { ContadorModule } from './contador/contador.module';
import { TorterraComponent } from './Tierra/torterra/torterra.component';



@NgModule({
  declarations: [
    AppComponent,
    TiranitarComponent,
    TrampinchComponent,
    TorterraComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    GeneradorModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
