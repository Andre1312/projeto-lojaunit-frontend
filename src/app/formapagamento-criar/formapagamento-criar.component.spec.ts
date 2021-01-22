import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagamentoCriarComponent } from './formapagamento-criar.component';

describe('FormapagamentoCriarComponent', () => {
  let component: FormapagamentoCriarComponent;
  let fixture: ComponentFixture<FormapagamentoCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormapagamentoCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormapagamentoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
