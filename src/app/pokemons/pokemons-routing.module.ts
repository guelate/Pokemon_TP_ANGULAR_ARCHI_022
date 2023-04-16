import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { AuthGuard } from '../auth/auth.guard';

//1er methode routes
// const pokemonsRoutes: Routes = [

//   {path: 'pokemon/all', component: PokemonsComponent},
//   {path: 'pokemon/:id', component: DetailPokemonComponent},
//   {path: 'pokemon/edit/:id', component: EditPokemonComponent},
// ];

//2 deuxieme methodes de route
const pokemonsRoutes: Routes = [
  {
    path: "pokemon",
    canActivate: [AuthGuard],
    children: [
      { path: 'all', component: PokemonsComponent },
      { path: ':id', component: DetailPokemonComponent },
      { path: 'edit/:id', component: EditPokemonComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
