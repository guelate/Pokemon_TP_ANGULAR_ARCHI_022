import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rareteColor',
})
export class PokemonRareteColor implements PipeTransform {
  transform(rarete: string): string {
    switch (rarete) {
      case '*':
        return 'rgb(120, 202, 26) ';
      case '**':
        return 'rgb(255, 223, 41)';
      case '***':
        return 'rgb(146, 127, 21 )';
      case '****':
        return 'rgb(204, 32, 221 )';
      case '*****':
        return 'rgb(240, 93, 48)';
      default:
        return 'rgb(0, 0, 0)';
    }
  }
}
