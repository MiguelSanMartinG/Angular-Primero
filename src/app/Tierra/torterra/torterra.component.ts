import { Component, OnInit } from '@angular/core';

interface Mob {
  nombre: string;
  numero :string;
}

@Component({
  selector: 'app-torterra',
  templateUrl: './torterra.component.html',
  styleUrls: ['../../../../node_modules/primeflex/primeflex.css']
})
export class TorterraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Mob = {
    nombre: 'Efectivo',
    numero: '0'
}
  listmobs: Mob[] = [
    {nombre:'Serpientuga',
    numero:'10'
  },
  {nombre:'Tortugota',
    numero:'112'
  },
  ];

  agregar(){
    console.log(this.nuevo);
    this.listmobs.push({nombre: this.nuevo.nombre,numero: this.nuevo.numero});
    this.nuevo = {nombre: '', numero: ''};

  }

}
