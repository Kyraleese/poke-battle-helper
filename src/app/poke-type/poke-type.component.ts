import { Component, OnInit, Input } from '@angular/core';
import { PokeType } from '../interface/poke-type';

@Component({
  selector: 'poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.css']
})
export class PokeTypeComponent implements OnInit {
  @Input() pokemon: PokeType;

  constructor() { }

  ngOnInit() {
  }

}