import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../classes/core-service';
import { Cliente } from '../classes/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends CoreService<Cliente> {

  constructor(protected http: HttpClient) {
    super(http, 'http://localhost:3200/api/clientes');
  }
}
