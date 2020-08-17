import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokeType } from '../interface/poke-type';
import { POKETYPES } from '../poketypes';

@Component({
  selector: 'poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.css']
})
export class PokeTypeComponent implements OnInit {
  pokemon: PokeType;
  poketypes = POKETYPES;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPokeType();
  }

  getPokeType(): void {
    const id = this.route.snapshot.paramMap.get("pokemontype");
    this.pokemon = this.poketypes.get(id);
  }

}