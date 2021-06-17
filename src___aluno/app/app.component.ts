import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nome !: string;
  storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  ngOnInit(): void {
    this.atribuirUsuario();
  }

  atribuirUsuario(): void {
    if (this.storage.getItem('usuario')) {
      this.nome = "Olá, " + this.storage.getItem('usuario');
    } else {
      this.nome = "Efetuar Login";
    }
  }

  mostrar(texto: string): void {
    this.storage.removeItem('usuario');
    this.atribuirUsuario();
    alert(texto);
  }
}
