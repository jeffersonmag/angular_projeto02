import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from 'src/app/components/clientes/clientes.component';
import { ClientesProdutosComponent } from 'src/app/components/clientes-produtos/clientes-produtos.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'produtos', component: ClientesProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
