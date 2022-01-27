import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class NewClientService {

  ClientData: Cliente;

  private nuevoClienteSubject = new Subject<Cliente>();
  nuevoClienteObservable = this.nuevoClienteSubject.asObservable();

  nuevoCliente(Cliente: Cliente) {
    this.ClientData = Cliente;
    this.nuevoClienteSubject.next(Cliente)
  }

}
