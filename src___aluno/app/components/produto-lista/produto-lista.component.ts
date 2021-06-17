import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  constructor(private service: ProdutosService) { }

  listaProdutos : Produto[] = [];

  ngOnInit(): void {
    this.service.getLista().subscribe(res => this.listaProdutos = res);
  }

}
