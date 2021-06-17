import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../classes/produto';

@Pipe({
  name: 'produtosCliente'
})
export class ProdutosClientePipe implements PipeTransform {

  transform(produtos: Produto[], codigos: string): Produto[] {

    let lista: string[] = codigos.split(',');
    return produtos.filter(p => lista.includes(p.codigo.toString()));    
  }

}
