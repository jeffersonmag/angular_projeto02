import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutoListaComponent } from '../produto-lista/produto-lista.component';
import { ProdutoNovoComponent } from '../produto-novo/produto-novo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoAlteracaoComponent } from '../produto-alteracao/produto-alteracao.component';
import { ProdutoRemocaoComponent } from '../produto-remocao/produto-remocao.component';
import { SubListaPipe } from '../../pipes/sub-lista.pipe';
import { SimboloPipe } from '../../pipes/simbolo.pipe';
import { DescontoPipe } from '../../pipes/desconto.pipe';
import { CategoriaPipe } from '../../pipes/categoria.pipe';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoListaComponent,
    ProdutoNovoComponent,
    ProdutoAlteracaoComponent,
    ProdutoRemocaoComponent,
    SubListaPipe,
    SimboloPipe,
    DescontoPipe,
    CategoriaPipe
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
