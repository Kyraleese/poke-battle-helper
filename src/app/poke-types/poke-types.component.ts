import { Component, OnInit } from '@angular/core';
import { PokeType } from '../interface/poke-type';
import { POKETYPES } from '../poketypes';

@Component({
  selector: 'poke-types',
  templateUrl: './poke-types.component.html',
  styleUrls: ['./poke-types.component.css']
})
export class PokeTypesComponent implements OnInit {
  poketypes = POKETYPES;

  constructor() { }

  ngOnInit() {
    console.log(this.poketypes);
  }

}