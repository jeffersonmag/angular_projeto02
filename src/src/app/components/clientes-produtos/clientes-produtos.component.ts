import { Component, OnInit, OnDestroy } from '@angular/core';
import { Produto } from 'src/app/classes/produto';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/classes/cliente';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-produtos',
  templateUrl: './clientes-produtos.component.html',
  styleUrls: ['./clientes-produtos.component.css']
})
export class ClientesProdutosComponent implements OnInit {

  constructor(    
    private pservice: ProdutosService,
    private cservice: ClientesService) { }

  produtos: Produto[] = [];
  clientes: Cliente[] = []

  subsc_produtos! : Observable<Produto[]>;
  subsc_clientes! : Observable<Cliente[]>;

  ngOnInit(): void {
    this.subsc_clientes = this.cservice.getLista();
    this.subsc_clientes.subscribe(res => this.clientes = res);

    this.subsc_produtos = this.pservice.getLista();
    this.subsc_produtos.subscribe(res => this.produtos = res);
  }

}
