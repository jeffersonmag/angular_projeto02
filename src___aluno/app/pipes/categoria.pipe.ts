import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../classes/produto';
import { ProdutosComponent } from '../components/produtos/produtos.component';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(produto: Produto[], categoria: string): Produto[] {
    if (!categoria){
      return produto;
    } else {
      return produto.filter(p => p.categoria.toLowerCase().includes(categoria.toLowerCase()));
    }
  }

}
