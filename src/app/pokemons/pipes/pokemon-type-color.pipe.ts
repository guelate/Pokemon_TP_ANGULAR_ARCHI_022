import {Pipe, PipeTransform} from "@angular/core";

/*
* Exemple d'utilisation 
*   {{ pokemon.type | pokemonTypeColor }}
*/



@Pipe({ name: 'pokemonTypeColor' })
export class PokemonTypeColorPipe implements PipeTransform{

        transform(type: string): string {

            let color: string;

            switch(type){
                case 'Feu':
                    color='red lighten-1';
                    break;
                case 'Eau':
                    color= 'blue lighten-1';
                    break;
                case 'Plante':
                    color='green lighten-1';
                    break;
                case 'Insecte':
                    color='brown lighten-1';
                    break;
                case 'Normal':
                    color='grey lighten-1';
                    break;
                case 'Vol':
                    color='blue lighten-';
                    break;
                case 'Poison':
                    color='deep-purple accent-1';
                    break;
                case 'Fée':
                    color='pink lighten-4';
                    break;
                case 'Psy':
                    color='deep-purple darken-2';
                    break;
                case 'Electrique':
                    color= 'lime accent-1';
                    break;
                case 'Combat':
                    color= 'deep-orange';
                    break;
                default:
                    color= 'yellow';
                    break; 
            }
            return 'chip '+ color;
        }

}
