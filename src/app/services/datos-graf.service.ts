import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosGrafService {

  datosBackServ:any;
  datosIngresos:any;

  private datosBack$ = new Subject<any>();
  private datosIngresos$ = new Subject<any>();

  datosObservable = this.datosBack$.asObservable();
  datosIngresosObservable = this.datosIngresos$.asObservable();

  datosBackShare(datos: any) {
    this.datosBackServ = datos;
    console.log('datosBackServ: ',this.datosBackServ)
    this.datosBack$.next(datos)
  }

  getDatos$():Observable<any>{
    return this.datosBack$.asObservable()
    }

  datosIngresosShare(datos: any) {
    this.datosIngresos = datos;
    console.log('datosIngresos: ',this.datosIngresos)
    this.datosIngresos$.next(datos)
  }

  getDatosIngresos$():Observable<any>{
    return this.datosIngresos$.asObservable()
    }


}
