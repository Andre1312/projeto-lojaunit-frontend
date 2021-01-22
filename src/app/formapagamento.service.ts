import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormapagamentoService {

  private baseUrl = 'http://localhost:8080/formapagamento';

  constructor(private http: HttpClient) { }

  getFormapagamento(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/buscar/${id}`);
  }

  createFormapagamento(formapagamento: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/criar`, formapagamento);
  }

  updateFormapagamento(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/atualizar/${id}`, value);
  }

  deleteFormapagamento(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/apagar/${id}`, { responseType: 'text' });
  }

  getFormapagamentosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }
}
