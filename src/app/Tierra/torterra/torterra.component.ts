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
    nombre: 'efec',
    numero: '0'
}

  agregar(){
    console.log(this.nuevo);
  }
  
}
