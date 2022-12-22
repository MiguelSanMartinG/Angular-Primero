import { Component } from '@angular/core';

@Component({
    selector: 'app-tiranitar',
    templateUrl: './tirnaitar.component.html',
    styleUrls: ['./tiranitar.component.css']

})

export class TiranitarComponent{
    nombre: string = 'Tyranitar';
    edad : number = 45;

    get edadMasPoke() {
        return `${this.nombre} + ${this.edad}`
    }

}