import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-remocao',
  templateUrl: './produto-remocao.component.html',
  styleUrls: ['./produto-remocao.component.css']
})
export class ProdutoRemocaoComponent implements OnInit {

  constructor(private service: ProdutosService,
    private route: ActivatedRoute,
    private router: Router) { }

  id!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }

  excluirProduto() {
    this.service.deleteItem(this.id).subscribe(() => {
      window.alert('Item excluído com sucesso');
      this.router.navigate(['/produtos']);
    })
  }

  voltar() {
    this.router.navigate(['/produtos']);
  }

}
