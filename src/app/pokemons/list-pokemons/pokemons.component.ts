import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../donnees-pokemons/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons!: Pokemon[];
  pokemonTab !: Pokemon[];
  pokemonData!: string;
  darkMode = false;

  constructor(private router: Router, private pokemonsService: PokemonService) {
    this.detectColorScheme();
  }

  ngOnInit(): void {
    //J'insère les données de mock-pokemon.ts dans la variable pokemons du composant
    // this.pokemons = this.pokemonService.getPokemon()

    this.pokemonsService
      .getPokemons()
      .subscribe((pokemons) => (this.pokemons = pokemons));

      this.pokemonsService.getPokemons().subscribe(
        pokemons => this.pokemonTab = pokemons
    )
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.id, 'clickd');
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link)
  }

  pokemonDataSearch() {
    this.pokemonData = this.pokemonData.toLowerCase();
  if (this.pokemonData == "") {
    this.pokemonTab = [];
    this.pokemonsService.getPokemons().subscribe(
      pokemons => this.pokemonTab = pokemons
    )
  } else {
    this.pokemonTab = this.pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(this.pokemonData) || 
      pokemon.rarete == this.pokemonData ||
      pokemon.types.some(type => type.toLowerCase().includes(this.pokemonData))
    );
  }
  console.log("xorkd")
}

detectColorScheme(){
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        this.darkMode = true;
        document.documentElement.setAttribute('data-theme',this.darkMode ? 'dark' : 'light');
    }
}

handleToggle(){
    this.darkMode = !this.darkMode;
    console.log(this.darkMode)
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
}

}
