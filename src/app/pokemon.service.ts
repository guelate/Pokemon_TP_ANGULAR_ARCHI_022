import { Injectable } from '@angular/core';
import { Pokemon } from './pokemons/donnees-pokemons/pokemon';
import { POKEMONS } from './pokemons/donnees-pokemons/mock-pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  private pokemonsUrl = 'api/pokemons';

  // getPokemons(): Pokemon[]{
  //     return POKEMONS
  // }

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  //le pipe async est un pipe capable de consommer des Observavle(ou Promise) en appelant
  //implicitement la methode subscribe ( ou then) afin de de "binder" les valeurs contenus dans
  //l'observable (ou la promise)
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap((_) => this.log('fetched pokemons')),
      catchError(this.handleError('getPokemons', []))
    );
  }

  // getPokenons():Observable<any>{
  //     return this.http.get(this.pokemonsUrl)
  // }

  //Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      tap((_) => this.log(`fetched pokemons`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  UpdatePokemon(pokemon: Pokemon): Observable<any> {
    const httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
    const updatedPokemonUrl = `${this.pokemonsUrl}/${pokemon.id}`;
  
    return this.http.put(updatedPokemonUrl, pokemon, { headers: httpOptions }).pipe(
      tap(() => this.log(`Le pokemon ${pokemon.id} a été mis à jour.`)),
      catchError(this.handleError<any>('UpdatePokemon'))
    );
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

  // HandlePokemon(pokemon: Pokemon): Observable<any> {
  //   return this.http
  //     .put<Pokemon>(this.pokemonsUrl, pokemon)
  //     .pipe(tap(),catchError((err) => {console.log(err);
  //         return of([]);
  //       })
  //     );
  // }
}
