import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoRemocaoComponent } from './produto-remocao.component';

describe('ProdutoRemocaoComponent', () => {
  let component: ProdutoRemocaoComponent;
  let fixture: ComponentFixture<ProdutoRemocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoRemocaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoRemocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
