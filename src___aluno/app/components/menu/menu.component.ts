import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() usuario: string = 'Olá';
  @Output() novoEvento = new EventEmitter<string>();

  executar(valor: string): void {
    this.novoEvento.emit(valor);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.usuario = changes.usuario.currentValue;
  }

}
