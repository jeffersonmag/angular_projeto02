import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from '../../classes/clientes'

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  constructor(private service: ClientesService) { }

  listaClientes: Cliente[] = [];

  ngOnInit(): void {
    this.service.getLista().subscribe(res => this.listaClientes = res);
  }

  atualiza(): void {
    this.service.getLista().subscribe(res => this.listaClientes = res);
  }

}
