import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalButtonComponent } from './components/modal-button/modal-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, FormBuilder } from '@angular/forms';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ReactiveFormsModule } from '@angular/forms'
import { MatBadgeModule } from '@angular/material/badge';
import { NewClientService } from './services/new-client.service';
import { CountdownComponent,FormatTimePipe } from './components/countdown/countdown.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({

  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,



  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,

  ],
  declarations: [
    TablaClientesComponent,
    ModalButtonComponent,
    ModalFormComponent,
    CountdownComponent,
    FormatTimePipe,


  ],
  entryComponents: [
  ],
  providers:[
    FormBuilder,
    NewClientService,

  ],
})
export class MaterialModule { }
