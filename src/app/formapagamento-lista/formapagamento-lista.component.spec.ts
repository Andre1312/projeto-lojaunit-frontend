import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagamentoListaComponent } from './formapagamento-lista.component';

describe('FormapagamentoListaComponent', () => {
  let component: FormapagamentoListaComponent;
  let fixture: ComponentFixture<FormapagamentoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormapagamentoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormapagamentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
