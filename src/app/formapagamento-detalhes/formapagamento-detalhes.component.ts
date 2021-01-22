import { Formapagamento } from '../formapagamento';
import { Component, OnInit, Input } from '@angular/core';
import { FormapagamentoService } from '../formapagamento.service';
import { FormapagamentoListaComponent } from '../formapagamento-lista/formapagamento-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formapagamento-detalhes',
  templateUrl: './formapagamento-detalhes.component.html',
  styleUrls: ['./formapagamento-detalhes.component.css']
})
export class FormapagamentoDetalhesComponent implements OnInit {

  id: number;
  formapagamento: Formapagamento;

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

  lista(){
    this.router.navigate(['formapagamentos']);
  }

  atualizar(){
    this.router.navigate(['update', id]);
  }

}
