import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  imports: [
    // other imports
  ],
  // other declarations, providers, etc.
})
export class AppModule {}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    DropdownModule,
    InputTextareaModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    DynamicDialogModule,
    DialogModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    DropdownModule,
    InputTextareaModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    DynamicDialogModule,
    DialogModule,
  ],
})
export class SharedModule {}
