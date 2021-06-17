import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-alteracao',
  templateUrl: './produto-alteracao.component.html',
  styleUrls: ['./produto-alteracao.component.css']
})
export class ProdutoAlteracaoComponent implements OnInit {

  constructor(private form: FormBuilder,
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute) { };

  produto!: Produto;

  submitted: boolean = false;

  builderForm!: FormGroup;

  ngOnInit(): void {

    // ActivateRoute: fornece informações sobre a rota (parametros)
    let id = this.route.snapshot.paramMap.get('id') as string;

    // Usando o componente FormBuilder
    this.builderForm = this.form.group({
      _id: ['', Validators.required],
      codigo: ['', [Validators.required, Validators.min(1)]],
      descricao: ['', [Validators.required, Validators.minLength(3)]],
      unidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      preco: ['', [Validators.required, Validators.min(1)]],
      categoria: ['', [Validators.required]]
    }); 
    
    // Buscando o produto com o id informado na rota
    this.service.getItem(id).subscribe(res => {
      this.produto = res;
      // atribuindo os dados do webservice ao formulário (builderForm)
      this.builderForm.patchValue(this.produto);
    });
  }

  alterarProduto(): void {
    this.submitted = true;

    if(this.builderForm.invalid) {
      return;
    }

    let produto : Produto = this.builderForm.value;
    this.service.putItem(produto, this.produto._id as string).subscribe(() => {
      window.alert('Produto alterado com sucesso');
      this.router.navigate(['/produtos']);
    })
  };

  limpar() : void {
    this.submitted = false;
    this.builderForm.reset(); // limpa todos os campos
  }

  get f() { return this.builderForm.controls; }
}
