import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "primeng/button";
import { ContadorComponent } from "./contador.component";
@NgModule({
    declarations: [
        ContadorComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ButtonModule
    ],
    exports: [
        ContadorComponent
    ]
        
})

export class ContadorModule{

}