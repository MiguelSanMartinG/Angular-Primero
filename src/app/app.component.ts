import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/primeflex/primeflex.css']
})
export class AppComponent {
  public title:string = 'base';
  public numero: number = 0;
  public multiplo: number = 5;
  
  sumar(valor:boolean){
    if (valor){
      this.numero = this.numero + 1;
    }
    if (valor == false){
      this.numero -= 1;
    }
  }

  acumu(){

    this.numero += this.multiplo;
  }
}
