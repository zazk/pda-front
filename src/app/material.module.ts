import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatButtonModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
