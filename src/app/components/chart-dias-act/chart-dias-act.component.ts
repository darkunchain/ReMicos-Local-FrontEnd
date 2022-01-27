import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DatosGrafService } from 'src/app/services/datos-graf.service';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-chart-dias-act',
  templateUrl: './chart-dias-act.component.html',
  styleUrls: ['./chart-dias-act.component.css']
})
export class ChartDiasActComponent implements OnInit {

  mydata: [] = []
  Clientes15: number = 0
  Clientes30: number = 0
  Clientes15p: number = 0
  Clientes30p: number = 0
  Clientes60: number = 0
  Clientes15T: number | string = 0
  Clientes30T: number | string = 0
  Clientes60T: number | string = 0
  total: number | string = 0

  displayedColumns: string[] = ['Ficha','nombre', 'telefono', 'tiempo', 'Fecha/hora'];
  dataSource: Cliente[] = [];


  //%%%%%%%%%%%%%%%%  Variables grafica dia de la semana mes actual  %%%%%%%%%%%%%%%%%%%%%%%%%%%//
  public ch1barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Ingresos por cliente',
      fontSize: 18,
      fontColor: "#111"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
      }],
      xAxes: [{
        ticks: {
          autoSkip: true
        },
      }],
    },
  }


  public ch1barChartLabels: Label[] = ['15 minutos', '30 minutos', '1 hora',];
  public ch1barChartBackground: Label[] = [
    'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'
  ]
  public ch1barChartType: ChartType = 'bar';
  public ch1barChartLegend = true;
  public ch1barChartPlugins = [];
  public ch1barChartData: ChartDataSets[] = [];


  constructor(private datosGrafService: DatosGrafService) { }

  ngOnInit() {

    this.datosGrafService.getDatosIngresos$().subscribe(datos => {
      this.ch1barChartData = [{
        data: [datos.Cli15 + datos.Cli15p, datos.Cli30 + datos.Cli30p, datos.Cli60],
        label: 'Clientes',
        backgroundColor: this.ch1barChartBackground,
        barPercentage: 0.3
      }]
      this.Clientes15 = datos.Cli15
      this.Clientes30 = datos.Cli30
      this.Clientes15p = datos.Cli15p
      this.Clientes30p = datos.Cli30p
      this.Clientes60 = datos.Cli60
      this.Clientes15T = (datos.Cli15 * 4000) + (datos.Cli15p * 3000)
      this.Clientes30T = (datos.Cli30 * 7000) + (datos.Cli30p * 5000)
      console.log(this.Clientes15T,this.Clientes30T)
      this.Clientes60T = datos.Cli60 * 12000
      this.total = this.Clientes15T + this.Clientes30T + this.Clientes60T
      this.dataSource = datos.ClientesHoy


    })


  }

}


