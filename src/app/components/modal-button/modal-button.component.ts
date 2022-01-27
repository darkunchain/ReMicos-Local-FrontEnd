import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { Cliente } from '../../interfaces/cliente';


@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css']
})
export class ModalButtonComponent {

  todayDate : Date = new Date();





  constructor(public dialog: MatDialog) { }

  openDialog({nombre, telefono, tiempo}:Cliente) {

    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {nombre, telefono, tiempo};

    const dialogRef = this.dialog.open(ModalFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialogo cerrado:")
    );
  }
}
