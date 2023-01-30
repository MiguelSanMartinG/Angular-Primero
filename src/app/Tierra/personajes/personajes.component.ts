import { Component, Input, OnInit } from '@angular/core';
import { Mob } from '../Interfaces/mob.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  @Input() personajes : Mob[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
