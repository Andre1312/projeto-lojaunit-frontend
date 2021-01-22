import { FormapagamentoDetalhesComponent } from '../formapagamento-detalhes/formapagamento-detalhes.component';
import { Observable } from "rxjs";
import { FormapagamentoService } from "../formapagamento.service";
import { Formapagamento } from "../formapagamento";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-formapagamento-list",
  templateUrl: "./formapagamento-lista.component.html",
  styleUrls: ["./formapagamento-lista.component.css"]
})
export class FormapagamentoListaComponent implements OnInit {
  formapagamentos: Observable<Formapagamento[]>;

  constructor(private formapagamentoService: FormapagamentoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.formapagamentos = this.formapagamentoService.getFormapagamentosList();
  }

  deleteFormapagamento(id: number) {
    this.formapagamentoService.deleteFormapagamento(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  formapagamentoDetalhes(id: number){
    this.router.navigate(['detalhes', id]);
  }
}
