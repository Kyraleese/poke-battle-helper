import { PokeType } from "./interface/poke-type";

export const POKETYPES: PokeType[] = [
  {
    id: "Normal",
    takes_double: ["Fighting"],
    takes_half: [],
    takes_none: ["Ghost"],
    deals_none: ["Ghost"],
    deals_double: []
  },
  {
    id: "Fighting",
    takes_double: ["Flying", "Psychic", "Fairy"],
    takes_half: ["Rock", "Bug", "Dark"],
    takes_none: [],
    deals_none: ["Ghost"],
    deals_double: ["Normal", "Rock", "Steel", "Ice", "Dark"]
  }
];

//{id:'', takes_double:[], takes_half:[], takes_none:[], deals_none:[], deals_double:[]}
