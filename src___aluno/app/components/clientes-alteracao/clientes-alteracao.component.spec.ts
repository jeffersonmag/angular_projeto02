import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAlteracaoComponent } from './clientes-alteracao.component';

describe('ClientesAlteracaoComponent', () => {
  let component: ClientesAlteracaoComponent;
  let fixture: ComponentFixture<ClientesAlteracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesAlteracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesAlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
