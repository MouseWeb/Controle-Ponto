import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatPaginatorIntl
} from '@angular/material';

import { 
	ListagemComponent, 
	LancamentoComponent,
	FuncionarioComponent 
} from './components';

import { 
  HttpUtilService, 
  LancamentoService,
  PtBrMatPaginatorIntl
} from '../shared';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    SharedModule
  ],
  declarations: [
  	ListagemComponent, 
  	LancamentoComponent,
  	FuncionarioComponent
  ],
  providers: [
    HttpUtilService, 
    LancamentoService,
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl }
  ]
})
export class FuncionarioModule { }






