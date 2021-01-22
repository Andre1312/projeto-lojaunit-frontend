import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormapagamentoCriarComponent } from './formapagamento-criar/formapagamento-criar.component';
import { FormapagamentoDetalhesComponent } from './formapagamento-detalhes/formapagamento-detalhes.component';
import { FormapagamentoListaComponent } from './formapagamento-lista/formapagamento-lista.component';
import { FormapagamentoAtualizarComponent } from './formapagamento-atualizar/formapagamento-atualizar.component';
@NgModule({
  declarations: [
    AppComponent,
    FormapagamentoCriarComponent,
    FormapagamentoDetalhesComponent,
    FormapagamentoListaComponent,
    FormapagamentoAtualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
