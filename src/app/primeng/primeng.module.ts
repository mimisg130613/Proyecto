import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule } from 'primeng/ripple';

const PrimeNgModules = [
  ButtonModule,
  PasswordModule,
  TableModule,
  DialogModule,
  InputTextModule,
  ToolbarModule,
  DropdownModule,
  CheckboxModule,
  RippleModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...PrimeNgModules
  ],
  exports: [
    ...PrimeNgModules
  ]
})
export class PrimengModule { }