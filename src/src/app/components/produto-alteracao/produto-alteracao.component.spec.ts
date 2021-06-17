import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAlteracaoComponent } from './produto-alteracao.component';

describe('ProdutoAlteracaoComponent', () => {
  let component: ProdutoAlteracaoComponent;
  let fixture: ComponentFixture<ProdutoAlteracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAlteracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
