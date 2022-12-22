import { Component } from '@angular/core';

@Component({
  selector: 'app-trampinch',
  templateUrl: './trampinch.component.html',
  styleUrls: ['./trampinch.component.css']
})
export class TrampinchComponent {
 movimientos: string[] = ['Tormenta de arena', 'Escavar', 'Mordida', 'Bucle Arena']
 borrados: string[] = [];
 a: string | undefined ;
 bandera: boolean = false;

 
 olvidarMovimiento(){
  this.a = this.movimientos.pop();
  if(this.a!= undefined){
    this.borrados.push(this.a)
  }
  if(this.borrados.length!=0){
    this.bandera=true;
  }
 }
 reset(){
  this.movimientos = ['Tormenta de arena', 'Escavar', 'Mordida', 'Bucle Arena'];
  this.borrados = [];
  this.bandera = false;
 }

}
