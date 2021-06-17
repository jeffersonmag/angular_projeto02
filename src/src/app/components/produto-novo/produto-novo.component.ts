import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {

  constructor(
      private form: FormBuilder, 
      private service: ProdutosService, 
      private router: Router) { }

  ngOnInit(): void {
  }

  //usando o componente FormBuilder
  builderForm = this.form.group({
    codigo: ['', [Validators.required, Validators.min(1)]],
    descricao: ['', [Validators.required, Validators.minLength(3)]],
    unidade: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
    preco: ['',[Validators.required, Validators.min(1)]],
    categoria: ['',[Validators.required, Validators.minLength(1)]]
  });

  incluirProduto() : void {
    this.submitted = true;
    if(this.builderForm.invalid){
      return;
    }

    let produto : Produto = this.builderForm.value;
    this.service.postItem(produto).subscribe(() => {
      window.alert('Produto incluído com sucesso');
      this.router.navigate(['/produtos']);
    });
  }

  limpar() : void {
    this.submitted = false;
    this.builderForm.reset();
  }
  //itens de conveniencia para a validação
  submitted: boolean = false;
  get f() { return this.builderForm.controls; }

}
