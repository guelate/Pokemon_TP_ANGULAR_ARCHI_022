import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'form-pokemon',
  templateUrl: './form-pokemon.component.html',
})
export class FormPokemonComponent implements OnInit {
  @Input() pokemon: any;

  types: any = [];
  constructor(private router: Router, private pokemonsService: PokemonService){ }

  ngOnInit(): void {
    this.types = this.getPokemonTypes();
  }

  getPokemonTypes(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
    ];
  }

  //determine si le type est passé en paramètres appartient ou non  en cours d'edition
  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (index > -1) {
      return true;
    }
    return false;
  }

  //methode appele lorsque l'utilisateur ajout ou retire au type au pokemon en cours d'edition
  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.slice(index, 1);
      }
    }
  }
  //valid le nb de type pour chaque pokemon
  isTypesValid(type: string): boolean {
    if (this.pokemon.types.lenght === 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.lenght >= 3 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit(): void {
    let link = ['/pokemon', this.pokemon.id];
    this.pokemonsService.UpdatePokemon(this.pokemon).subscribe();
    this.router.navigate(link);
  }

  goDetail(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
