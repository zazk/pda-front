import { NgModule } from "@angular/core";
import {
  MatDialogModule,
  MatButtonModule,
  MatCheckboxModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
