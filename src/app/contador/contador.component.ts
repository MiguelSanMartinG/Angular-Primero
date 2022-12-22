import { Component } from '@angular/core';
// App tiene a app component que es el archovo complementario al app.component.html
// template sirve para poner el html o un url al html
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})

export class ContadorComponent{

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
  degra(){
    this.numero -= this.multiplo;
  }
}