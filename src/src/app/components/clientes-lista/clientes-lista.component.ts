import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/classes/cliente';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit, OnChanges {

  constructor( private form: FormBuilder) { }

  @Input() listaClientes: Cliente[] = [];
  
  ngOnInit(): void {
    //this.service.getLista().subscribe(res => this.listaClientes = res);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.listaClientes = changes.listaClientes.currentValue; 
  }

  builderForm = this.form.group({

  });

  removerCliente(){

  }  
}
