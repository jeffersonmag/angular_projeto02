import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesRemocaoComponent } from './clientes-remocao.component';

describe('ClientesRemocaoComponent', () => {
  let component: ClientesRemocaoComponent;
  let fixture: ComponentFixture<ClientesRemocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesRemocaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesRemocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
