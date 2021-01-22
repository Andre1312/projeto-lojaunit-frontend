import { FormapagamentoDetalhesComponent } from './formapagamento-detalhes/formapagamento-detalhes.component';
import { FormapagamentoCriarComponent } from './formapagamento-criar/formapagamento-criar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormapagamentoListaComponent } from './formapagamento-lista/formapagamento-lista.component';
import { FormapagamentoAtualizarComponent } from './formapagamento-atualizar/formapagamento-atualizar.component';

const routes: Routes = [
  { path: '', redirectTo: 'formapagamento', pathMatch: 'full' },
  { path: 'formapagamentos', component: FormapagamentoListaComponent },
  { path: 'add', component: FormapagamentoCriarComponent },
  { path: 'update/:id', component: FormapagamentoAtualizarComponent },
  { path: 'detalhes/:id', component: FormapagamentoDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
