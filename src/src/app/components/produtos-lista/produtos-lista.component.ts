import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/classes/produto';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  constructor(private service: ProdutosService) { }

  listaProdutos : Produto[] = [];

  ngOnInit(): void {
    this.service.getLista().subscribe(res => this.listaProdutos = res);
  }

}
