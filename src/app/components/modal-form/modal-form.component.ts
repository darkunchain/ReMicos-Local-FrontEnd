import { Component, Inject, OnInit, Output, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Cliente } from '../../interfaces/cliente'
import { NewClientService } from '../../services/new-client.service';





@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  form: FormGroup;
  ClientData!: Cliente;
  counter!: number;
  contador!: number;



  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) { nombre, telefono, tiempo }: Cliente,
    private newClientService: NewClientService) {


    this.form = fb.group({
      nombre: [nombre, Validators.required],
      telefono: [telefono, Validators.required],
      tiempo: [tiempo, Validators.required],
    });
  }

  ngOnInit() {

  }

  close() {

    this.dialogRef.close(this.form.value);

  }

  min15() {
    this.form.value.tiempo = 900;//900
    this.form.value.ingresos = 5000;
    this.form.value.accion = 'activo';
    this.form.value.blink = false;
    this.dialogRef.close(this.form.value);
    console.log('15min_this.form.value:',this.form.value)
    this.newClientService.nuevoCliente(this.form.value);
  }

  min30() {
    this.form.value.tiempo = 1800;//1800
    this.form.value.ingresos = 8000;
    this.form.value.accion = 'activo';
    this.form.value.blink = false;
    this.dialogRef.close(this.form.value);
    console.log('30min_this.form.value:',this.form.value)
    this.newClientService.nuevoCliente(this.form.value);
  }

  min60() {
    this.form.value.tiempo = 3600;//3600
    this.form.value.ingresos = 14000;
    this.form.value.accion = 'activo';
    this.form.value.blink = false;
    this.dialogRef.close(this.form.value);
    console.log('60min_this.form.value:',this.form.value)
    this.newClientService.nuevoCliente(this.form.value);
  }

  min15p() {
    this.form.value.tiempo = 960;
    this.form.value.ingresos = 3000;
    this.form.value.accion = 'activo';
    this.form.value.blink = false;
    this.dialogRef.close(this.form.value);
    console.log('15minP_this.form.value:',this.form.value)
    this.newClientService.nuevoCliente(this.form.value);
  }

  min30p() {
    this.form.value.tiempo = 1860;
    this.form.value.ingresos = 6000;
    this.form.value.accion = 'activo';
    this.form.value.blink = false;
    this.dialogRef.close(this.form.value);
    console.log('30minP_this.form.value:',this.form.value)
    this.newClientService.nuevoCliente(this.form.value);
  }

}
