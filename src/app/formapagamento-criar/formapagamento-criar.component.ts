import { FormapagamentoService } from '../formapagamento.service';
import { Formapagamento } from '../formapagamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formapagamento-criar',
  templateUrl: './formapagamento-criar.component.html',
  styleUrls: ['./formapagamento-criar.component.css']
})
export class FormapagamentoCriarComponent implements OnInit {

  formapagamento: Formapagamento = new Formapagamento();
  submitted = false;

  constructor(private formapagamentoService: FormapagamentoService,
    private router: Router) { }

  ngOnInit() {
  }

  newFormapagamento(): void {
    this.submitted = false;
    this.formapagamento = new Formapagamento();
  }

  save() {
    this.formapagamentoService
    .createFormapagamento(this.formapagamento).subscribe(data => {
      console.log(data)
      this.formapagamento = new Formapagamento();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/formapagamentos']);
  }
}
