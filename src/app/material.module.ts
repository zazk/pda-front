import { NgModule } from "@angular/core";
import {
  MatDialogModule,
  MatButtonModule,
  MatCheckboxModule,
  MatAutocompleteModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}
