import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from '../../components/clientes/clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientesListaComponent } from '../../components/clientes-lista/clientes-lista.component';
import { ClientesProdutosComponent } from '../../components/clientes-produtos/clientes-produtos.component';
import { ProdutosClientePipe } from '../../pipes/produtos-cliente.pipe';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesListaComponent,
    ClientesProdutosComponent,
    ProdutosClientePipe
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ClientesComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }
