import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/classes/produto';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/classes/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClientesListaComponent } from "src/app/components/clientes-lista/clientes-lista.component";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private form: FormBuilder, 
    private pservice: ProdutosService,
    private cservice: ClientesService) { 
      
    }

  produtos: Produto[] = [];
  subsc_produtos! : Observable<Produto[]>;
  subsc_cliente! : Observable<Cliente>;
  subsc_clientes! : Observable<Cliente[]>;

  clientes: Cliente[] = []


  ngOnInit(): void {
    this.subsc_produtos = this.pservice.getLista();
    this.subsc_produtos.subscribe(res => this.produtos = res);

    this.subsc_clientes = this.cservice.getLista();
    this.subsc_clientes.subscribe(res => this.clientes = res);
  }

  incluirCliente() : void {
    let cliente : Cliente = this.builderForm.value;
    this.subsc_cliente = this.cservice.postItem(cliente);
    this.subsc_cliente.subscribe(
      res => JSON.stringify(res),
      error => window.alert(error),
      () => {
        window.alert('Cliente incluído com sucesso');
        this.subsc_clientes.subscribe(res => this.clientes = res);
      });      
    console.log(cliente);
  }


  //usando o componente FormBuilder
  builderForm = this.form.group({
    nome: [],
    dataNascimento: [],
    cpf: [],
    email: [],
    produtos: []
  });  
}
