import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/classes/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClientesComponent } from '../clientes/clientes.component';

@Component({
  selector: 'app-clientes-novo',
  templateUrl: './clientes-novo.component.html',
  styleUrls: ['./clientes-novo.component.css']
})
export class ClientesNovoComponent implements OnInit {

  constructor(private form: FormBuilder,
    private service: ClientesService,
    private router: Router) { }

  submitted: boolean = false;

  //@ViewChildren (ClientesComponent) clientesComp: any;

  ngOnInit(): void {
  }

  builderForm = this.form.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    dataNascimento: ['', [Validators.required]],
    cpf: ['', [Validators.required, Validators.min(0), Validators.minLength(10), Validators.maxLength(11)]],
    email: ['', [Validators.required, Validators.email]],
    produtos: ['', [Validators.required]],
  });

  incluirClientes(): void {
    this.submitted = true;

    if (this.builderForm.invalid) {
      return;
    }

    let cliente: Cliente = this.builderForm.value;
    this.service.postItem(cliente).subscribe(() => {
      //this.clientesComp.atualiza();
      window.alert('Cliente inserido com sucesso');
      this.router.navigate(['/clientes']);      
    })
  };

  limpar(): void {
    this.submitted = false;
    this.builderForm.reset();
  }

  get f() { return this.builderForm.controls; }

}
