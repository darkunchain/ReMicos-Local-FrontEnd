import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  public asignacion:number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]


  private asigna$: Subject<number>;


  constructor() {
    this.asigna$ = new Subject();
  }

  setAsignacion(index:number){
    this.asignacion[index] = 1
  }

  noAsignacion(index:number){
    this.asignacion[index] = 0
  }

  asignaT(){
    let turno = this.asignacion.indexOf(0)
    turno += 1
    return turno
  }
}
