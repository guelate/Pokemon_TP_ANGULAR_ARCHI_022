import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './pokemons/edit-pokemon/edit-pokemon.component';
import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'pokemon/all', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'pokemon/all', component: PokemonsComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},
  {path: 'pokemon/edit/:id', component: EditPokemonComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
