import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/classes/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClientesListaComponent } from '../clientes-lista/clientes-lista.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @ViewChild(ClientesListaComponent) value: any;

  constructor(private form: FormBuilder,
    private service: ClientesService,
    private router: Router) { }

  cliente!: Cliente;

  submitted: boolean = false;

  builderForm!: FormGroup;

  listaClientes: Cliente[] = [];

  ngOnInit(): void {
    this.builderForm = this.form.group({
      _id: ['', Validators.required],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      dataNascimento: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.min(0), Validators.minLength(10), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      produtos: ['', [Validators.required]],
    });

    this.service.getLista().subscribe(res => this.listaClientes = res);

  }

  atualiza(): void {
    this.service.getLista().subscribe(res => this.listaClientes = res);
  }

  alterarDeletarBuscaCliente(cliente: any): void {
    let id = cliente._id;
    this.service.getItem(id).subscribe(res => {
      this.cliente = res;
      this.builderForm.patchValue(this.cliente);
    })
  }

  alterarClientes(): void {
    this.submitted = true;

    if (this.builderForm.invalid) {
      return;
    }

    let cliente: Cliente = this.builderForm.value;
    this.service.putItem(cliente, cliente._id as string).subscribe(() => {
      window.alert('Cliente alterado com sucesso');
      this.atualiza();
      this.router.navigate(['/clientes']);
    })
  };

  excluirCliente() {
    let cliente: Cliente = this.builderForm.value;
    this.service.deleteItem(cliente._id as string).subscribe(() => {
      window.alert('Item excluído com sucesso');
      this.atualiza();
      this.router.navigate(['/clientes']);
    })
  }

  limpar(): void {
    this.submitted = false;
    this.builderForm.reset();
  }

  get f() { return this.builderForm.controls; }

}
