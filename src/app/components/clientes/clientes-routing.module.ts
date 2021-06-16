import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesAlteracaoComponent } from '../clientes-alteracao/clientes-alteracao.component';
import { ClientesNovoComponent } from '../clientes-novo/clientes-novo.component';
import { ClientesRemocaoComponent } from '../clientes-remocao/clientes-remocao.component';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'novo', component: ClientesNovoComponent },
  { path: 'alteracao/:id', component: ClientesAlteracaoComponent },
  { path: 'remocao/:id', component: ClientesRemocaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
