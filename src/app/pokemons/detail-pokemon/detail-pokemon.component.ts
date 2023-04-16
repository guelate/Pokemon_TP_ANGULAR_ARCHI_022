import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../donnees-pokemons/pokemon';
import { POKEMONS } from '../donnees-pokemons/mock-pokemon';

import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
  pokemons!: Pokemon[];
  pokemon: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private PokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;
    let idUrl = this.route.snapshot.params['id'];
    this.PokemonService.getPokemon(idUrl).subscribe(
      (pokemon) => (this.pokemon = pokemon)
    );

    // for(let i = 0; i < this.pokemons.length; i++){
    //   if(this.pokemons[i].id == idUrl){
    //     this.pokemon = this.pokemon[i]
    //   }
    // } ou
    this.pokemon = this.PokemonService.getPokemon(idUrl);
  }

  goBack(): void {
    this.router.navigate(['/pokemon/all']);
  }

  goToEdit(pokemon: Pokemon) {
    console.log(pokemon.id);
    let link = ['/pokemon/edit/', pokemon.id];
    this.router.navigate(link);
  }
  

  onDelete(pokemon: Pokemon) {
    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].id == pokemon.id) {
        this.pokemons.splice(i, 1);
        this.router.navigate(['/pokemon/all']);
      }
    }
  }


}
