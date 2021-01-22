import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagamentoDetalhesComponent } from './formapagamento-detalhes.component';

describe('FormapagamentoDetalhesComponent', () => {
  let component: FormapagamentoDetalhesComponent;
  let fixture: ComponentFixture<FormapagamentoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormapagamentoDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormapagamentoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
