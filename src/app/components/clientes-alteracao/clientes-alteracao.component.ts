import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/classes/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-alteracao',
  templateUrl: './clientes-alteracao.component.html',
  styleUrls: ['./clientes-alteracao.component.css']
})
export class ClientesAlteracaoComponent implements OnInit {

  constructor(private form: FormBuilder,
    private service: ClientesService,
    private router: Router,
    private route: ActivatedRoute) { };

  cliente!: Cliente;

  submitted: boolean = false;

  builderForm!: FormGroup;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') as string;

    this.builderForm = this.form.group({
      _id: ['', Validators.required],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      dataNascimento: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.min(0), Validators.minLength(10), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      produtos: ['', [Validators.required]],
    });

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
      this.router.navigate(['/clientes']);
      this.limpar();
    })
  };

  limpar(): void {
    this.submitted = false;
    this.builderForm.reset();
  }

  get f() { return this.builderForm.controls; }

}
