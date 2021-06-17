import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesProdutosComponent } from './clientes-produtos.component';

describe('ClientesProdutosComponent', () => {
  let component: ClientesProdutosComponent;
  let fixture: ComponentFixture<ClientesProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
