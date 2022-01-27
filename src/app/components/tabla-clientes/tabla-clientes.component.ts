import { Component, OnInit, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { BlinkService } from 'src/app/services/blink.service';
import { DatosGrafService } from 'src/app/services/datos-graf.service';
import { SendDataService } from 'src/app/services/send-data.service';
import { TurnoService } from 'src/app/services/turno.service';
import { NewClientService } from '../../services/new-client.service';




@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css'],
  providers: []
})


export class TablaClientesComponent implements OnInit {

  ClientData!: Cliente;
  arrayCliente: Cliente[] = [];
  displayedColumns: string[] = ['Ficha', 'nombre', 'telefono', 'tiempo', 'accion'];
  dataSource: Cliente[] = [];
  counter!: number;
  idTimer!: number;
  dato!: Cliente;
  current!: Date;


  constructor(
    private newClientService: NewClientService,
    private blinkService: BlinkService,
    private sendDataService:SendDataService,
    private datosGrafService:DatosGrafService,
    private turnoService:TurnoService) {}

  ngOnInit() {

    this.sendDataService.getRegistros().subscribe(datos =>{
      console.log('Registros: ', datos)
      this.datosGrafService.datosBackShare(datos)
    })

    this.sendDataService.getIngresos().subscribe(datos =>{
      console.log('Ingresos: ', datos)
      this.datosGrafService.datosIngresosShare(datos)
    })

    this.newClientService.nuevoClienteObservable.subscribe(response => {

      this.ClientData = response
      this.ClientData.turno = this.turnoService.asignaT()
      this.turnoService.setAsignacion(this.ClientData.turno - 1)
      this.dataSource.push(this.ClientData);
      this.blinkService.getBlinkId$().subscribe(IdBlinkFS => {
        this.dataSource[IdBlinkFS].blink = true
      })
    })



  }

  sendReg(index:number,elturno:any) {
    this.dato = this.dataSource[index]
    const turno = this.dato.turno
    this.turnoService.noAsignacion(elturno - 1)
    this.dato.accion = 'inactivo'
    this.dato.blink = false
    this.dato.createdAt = new Date().toLocaleString('es-CO')
    this.dato.isoDate = new Date()
    console.log('this.dato_send:',this.dato)
    this.sendDataService.postClient(this.dato).subscribe(data => {

    },error => {

    })
    this.dataSource.splice(index, 1)

    this.sendDataService.getRegistros().subscribe(datos =>{
      console.log('Registros: ', datos)
      this.datosGrafService.datosBackShare(datos)
    })
    this.sendDataService.getIngresos().subscribe(datos =>{
      console.log('Ingresos: ', datos)
      this.datosGrafService.datosBackShare(datos)
    })

    this.datosGrafService.getDatosIngresos$().subscribe(datos => {
      console.log('getDatosIngresos: ', datos)

    })
  }

  asignarTurno(){
    let data = this.turnoService.asignaT()
  }

  obtenerRegistros(){
    this.sendDataService.getRegistros().subscribe(datos =>{
      console.log('Registros: ', datos)
      this.datosGrafService.datosBackShare(datos)
    })
    this.sendDataService.getIngresos().subscribe(datos =>{
      console.log('Ingresos: ', datos)
      this.datosGrafService.datosIngresosShare(datos)
    })
  }



}


