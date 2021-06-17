import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/classes/produto';

@Component({
  selector: 'app-produto-alteracao',
  templateUrl: './produto-alteracao.component.html',
  styleUrls: ['./produto-alteracao.component.css']
})
export class ProdutoAlteracaoComponent implements OnInit {

  constructor(
    private form: FormBuilder,
    private router: Router,
    private service: ProdutosService,
    private route: ActivatedRoute) { }

  produto!: Produto;
  builderForm!: FormGroup;


  ngOnInit(): void {
    //ActivateRoute: fornece informações sobre a rota (parametros)
    let id = this.route.snapshot.paramMap.get('id') as string;

    //usando o componente FormBuilder
    this.builderForm = this.form.group({
      __v: [''],
      _id: [''],
      codigo: ['', [Validators.required, Validators.min(1)]],
      descricao: ['', [Validators.required, Validators.minLength(3)]],
      unidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      preco: ['', [Validators.required, Validators.min(1)]],
      categoria: ['', [Validators.required, Validators.minLength(1)]]
    });

    //buscando o produto com o id informado na rota
    this.service.getItem(id).subscribe(res => {
      this.produto = res;
      //this.builderForm.setValue(this.produto);  
      this.builderForm.patchValue(this.produto);  
    });
  }

  alterarProduto(): void {
    this.submitted = true;
    if(this.builderForm.invalid){
      return;
    }

    this.produto = this.builderForm.value;
    this.service.putItem(this.produto, this.produto._id as string)
      .subscribe(() => {
        window.alert('Produto alterado!');
        this.router.navigate(['/produtos']);
      });
  }

  cancelar() : void {
    this.router.navigate(['/produtos']);
  }

  limpar() : void {
    this.submitted = false;
    this.builderForm.reset();
  }
  //itens de conveniencia para a validação
  submitted: boolean = false;
  get f() { return this.builderForm.controls; }  
}
