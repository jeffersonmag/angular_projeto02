import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/classes/produto';

@Component({
  selector: 'app-produto-remocao',
  templateUrl: './produto-remocao.component.html',
  styleUrls: ['./produto-remocao.component.css']
})
export class ProdutoRemocaoComponent implements OnInit {

  constructor(    
    private router: Router,
    private service: ProdutosService,
    private route: ActivatedRoute) { }

    produto!: Produto;
    id: string = this.route.snapshot.paramMap.get('id') as string;

  ngOnInit(): void {
    this.service.getItem(this.id).subscribe(res => this.produto = res);
  }

  remover() {    
    this.service.deleteItem(this.id).subscribe(() => {
      this.cancelar();
    });
  }
  cancelar(){
    this.router.navigate(['/produtos']);
  }

}
