import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumoComponent } from './components/resumo/resumo.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "sobre", component: ResumoComponent },
  { path: "login", component: LoginComponent },
  { path: "produtos", loadChildren: () => import('./components/produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: "clientes", loadChildren: () => import('./modules/clientes/clientes.module').then(c => c.ClientesModule) },
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
