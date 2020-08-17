import { PokeType } from "./interface/poke-type";

export const POKETYPES: Map<String, PokeType> = new Map([
  ['Normal', {
    id: "Normal",
    takes_double: ["Fighting"],
    takes_half: [],
    takes_none: ["Ghost"],
    deals_none: ["Ghost"],
    deals_double: []
  }],
  ['Fighting', {
    id: "Fighting",
    takes_double: ["Flying", "Psychic", "Fairy"],
    takes_half: ["Rock", "Bug", "Dark"],
    takes_none: [],
    deals_none: ["Ghost"],
    deals_double: ["Normal", "Rock", "Steel", "Ice", "Dark"]
  }],
    ['Flying', {
    id: "Flying",
    takes_double: ["Rock","Electric","Ice"],
    takes_half: ["Fight","Bug","Grass"],
    takes_none: ["Ground"],
    deals_none: [],
    deals_double: ["Fight","Bug","Grass"]
  }],
    ['Poison', {
    id: "Poison",
    takes_double: ["Ground","Psychic"],
    takes_half: ["Fighting","Poison","Bug","Grass","Fairy"],
    takes_none: [],
    deals_none: ["Steel"],
    deals_double: ["Grass","Fairy"]
  }],
    ['Ground', {
    id: "Ground",
    takes_double: ["Water","Grass","Ice"],
    takes_half: ["Poison","Rock"],
    takes_none: ["Electric"],
    deals_none: ["Flying"],
    deals_double: ["Poison","Rock","Steel","Fire","Electric"]
  }],
    ['Rock', {
    id: "Rock",
    takes_double: ["Fighting","Ground","Steel","Water","Grass"],
    takes_half: ["Normal","Flying","Poison","Fire"],
    takes_none: [],
    deals_none: [],
    deals_double: ["Flying","Bug","Fire","Ice"]
  }],
    ['Bug', {
    id: "Bug",
    takes_double: ["Flying","Rock","Fire"],
    takes_half: ["Fighting","Ground","Grass"],
    takes_none: [],
    deals_none: [],
    deals_double: ["Grass","Psychic","Dark"]
  }],
    ['Ghost', {
    id: "Ghost",
    takes_double: ["Ghost","Dark"],
    takes_half: ["Poison","Bug"],
    takes_none: ["Normal","Fighting"],
    deals_none: ["Normal"],
    deals_double: ["Ghost","Psychic"]
  }],
    ['Steel', {
    id: "Steel",
    takes_double: ["Fighting","Ground","Fire"],
    takes_half: ["Normal","Flying","Rock","Bug","Steel","Grass","Psychic","Ice","Dragon","Fairy"],
    takes_none: ["Poison"],
    deals_none: [],
    deals_double: ["Rock","Ice","Fairy"]
  }],
    ['Fire', {
    id: "Fire",
    takes_double: ["Ground","Rock","Water"],
    takes_half: ["Bug","Steel","Fire","Grass","Ice","Fairy"],
    takes_none: [],
    deals_none: [],
    deals_double: ["Bug","Steel","Grass","Ice"]
  }],
    ['Water', {
    id: "Water",
    takes_double: ["Grass","Electric"],
    takes_half: ["Steel","Fire","Water","Ice"],
    takes_none: [],
    deals_none: [],
    deals_double: ["Ground","Rock","Fire"]
  }],
    ['Grass', {
    id: "Grass",
    takes_double: ["Flying","Poison","Bug","Fire","Ice"],
    takes_half: ["Ground","Water","Grass","Electric"],
    takes_none: [],
    deals_none: [],
    deals_double: ["Ground","Rock","Water"]
  }],
    ['Electric', {
    id: "Electric",
    takes_double: ["Ground"],
    takes_half: ["Flying","Steel","Electric"],
    takes_none: [],
    deals_none: ["Ground"],
    deals_double: ["Flying","Water"]
  }],
    ['Psychic', {
    id: "Psychic",
    takes_double: ["Bug","Ghost","Dark"],
    takes_half: ["Fighting","Psychic"],
    takes_none: [],
    deals_none: [],
    deals_double: ["Fighting"]
  }],
    ['Ice', {
    id: "Ice",
    takes_double: ["Fighting","Rock","Steel","Fire"],
    takes_half: ["Ice"],
    takes_none: [],
    deals_none: [],
    deals_double: ["Flying","Ground","Grass","Dragon"]
  }],
    ['Dragon', {
    id: "Dragon",
    takes_double: ["Ice","Dragon","Fairy"],
    takes_half: ["Fire","Water","Grass","Electric"],
    takes_none: [],
    deals_none: ["Fairy"],
    deals_double: ["Dragon"]
  }],
    ['Dark', {
    id: "Dark",
    takes_double: ["Fighting","Bug","Fairy"],
    takes_half: ["Ghost","Dark"],
    takes_none: ["Psychic"],
    deals_none: [],
    deals_double: ["Ghost","Psychic"]
  }],
    ['Fairy', {
    id: "Fairy",
    takes_double: ["Poison","Steel"],
    takes_half: ["Fighting","Bug","Dark"],
    takes_none: ["Dragon"],
    deals_none: [],
    deals_double: ["Fighting","Dragon","Dark"]
  }],
]);


//{id:'', takes_double:[], takes_half:[], takes_none:[], deals_none:[], deals_double:[]}
