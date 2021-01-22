import { Component, OnInit } from '@angular/core';
import { Formapagamento } from '../formapagamento';
import { ActivatedRoute, Router } from '@angular/router';
import { FormapagamentoService } from '../formapagamento.service';

@Component({
  selector: 'app-formapagamento-atualizar',
  templateUrl: './formapagamento-atualizar.component.html',
  styleUrls: ['./formapagamento-atualizar.component.css']
})
export class FormapagamentoAtualizarComponent implements OnInit {

  id: number;
  formapagamento: Formapagamento;

  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private formapagamentoService: FormapagamentoService) { }

  ngOnInit() {
    this.formapagamento = new Formapagamento();

    this.id = this.route.snapshot.params['id'];

    this.formapagamentoService.getFormapagamento(this.id)
      .subscribe(data => {
        console.log(data)
        this.formapagamento = data;
      }, error => console.log(error));
  }

  updateFormapagamento() {
    this.formapagamentoService.updateFormapagamento(this.id, this.formapagamento)
      .subscribe(data => {
        console.log(data);
        this.formapagamento = new Formapagamento();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateFormapagamento();
  }

  gotoList() {
    this.router.navigate(['/formapagamentos']);
  }
}
