import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ClientesListaComponent } from '../clientes-lista/clientes-lista.component';
import { ClientesNovoComponent } from '../clientes-novo/clientes-novo.component';
import { ClientesAlteracaoComponent } from '../clientes-alteracao/clientes-alteracao.component';
import { ClientesRemocaoComponent } from '../clientes-remocao/clientes-remocao.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesListaComponent,
    ClientesNovoComponent,
    ClientesAlteracaoComponent,
    ClientesRemocaoComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
