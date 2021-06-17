import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../classes/produto';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(produtos: Produto[], input: string): Produto[] {
    if(!input){
      return produtos;
    } else {
      return produtos.filter(p => p.categoria.toLowerCase() === input.toLowerCase());
    }
  }

}
