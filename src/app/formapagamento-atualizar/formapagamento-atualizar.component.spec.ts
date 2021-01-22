import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagamentoAtualizarComponent } from './formapagamento-atualizar.component';

describe('FormapagamentoAtualizarComponent', () => {
  let component: FormapagamentoAtualizarComponent;
  let fixture: ComponentFixture<FormapagamentoAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormapagamentoAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormapagamentoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
