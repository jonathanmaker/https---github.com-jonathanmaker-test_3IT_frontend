import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cliente } from '../cliente';
import {Estilos} from '../estilos';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/musica/estilo';
  Url2='http://localhost:8080/api/clientes';

  getEstilo(){
    return this.http.get<Estilos[]>(this.Url);
  }

  crearPersona(cliente:Cliente){
    return this.http.post<Cliente>(this.Url2,cliente);
  }

  getPersona(){
    return this.http.get<Cliente[]>(this.Url2);
  }
}
