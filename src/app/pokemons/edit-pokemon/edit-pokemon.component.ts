import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../donnees-pokemons/pokemon';
import { POKEMONS } from '../donnees-pokemons/mock-pokemon';

import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemons !: Pokemon[];
  pokemon: any = null;

  constructor(private router: Router, private route: ActivatedRoute, private PokemonService:PokemonService){}

  ngOnInit(): void {
    this.pokemons = POKEMONS
    let idUrl = this.route.snapshot.params['id']
    this.PokemonService.getPokemon(idUrl).subscribe(
      pokemon => this.pokemon = pokemon
    )

    // for(let i = 0; i < this.pokemons.length; i++){
    //   if(this.pokemons[i].id == idUrl){
    //     this.pokemon = this.pokemon[i]
    //   }
    // } ou 
    this.pokemon = POKEMONS.find(p => p.id == parseInt(idUrl))
  }

}
