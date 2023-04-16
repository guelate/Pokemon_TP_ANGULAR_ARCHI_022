import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';
import { PokemonService } from '../pokemon.service';

import { BorderCardDirective } from '../directive/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonRareteColor } from './pipes/pokemon-rarete.pipe';

@NgModule({
  declarations: [
    PokemonsComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    FormPokemonComponent,
    PokemonTypeColorPipe,
    PokemonRareteColor,
    BorderCardDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,

  ],
  providers: [PokemonService],
  bootstrap: []
})
export class PokemonsModule {}
