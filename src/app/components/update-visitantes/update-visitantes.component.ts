import { EventEmitter, Component, OnInit, Input, Output, TemplateRef, ViewChild } from "@angular/core";
import { Pax } from "../../models/pax";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";

declare var $: any;
@Component({
  selector: "app-update-visitantes",
  templateUrl: "./update-visitantes.component.html",
  styles: []
})
export class UpdateVisitantesComponent implements OnInit {
  @Input() paxes: Pax[] = [];
  @Output() cancel = new EventEmitter();
  @Output() finalizar = new EventEmitter();
  @ViewChild("dialogConfirm") dialogConfirm: TemplateRef<any>;
  fechaPax: string;
  activePax: Pax;
  dialogRef: MatDialogRef<any>;
  constructor(
    private dialog: MatDialog) {}

  ngOnInit() {
    this.loadScript();
  }

  onSubmitPax(f: NgForm) {
    console.log(f);
    f.value.nacimiento = this.fechaPax;
    if (f.valid && this.fechaPax) {
      this.paxes.push(f.value);
      localStorage.setItem("paxes", JSON.stringify(this.paxes));
      f.reset();
    } else {
      alert("Todos los datos del pasajero son requeridos");
    }
  }

  onRemovePax(pax: Pax): void {
    this.openDialog(pax);
    return;
  }


  openDialog(pax: Pax): void {
    this.activePax = pax;
    this.dialogRef = this.dialog.open(this.dialogConfirm, {
      width: "250px",
      data: { pax: pax }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  onValidateNumber(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  onConfirmRemovePax() {
    this.paxes = this.paxes.filter(p => p.dni !== this.activePax.dni);
    localStorage.setItem("paxes", JSON.stringify(this.paxes));
    this.dialogRef.close();
  }

  loadScript() {
    console.log("ROUND!!");
    $("#datepicker-paxer").datepicker({
      maxDate: new Date(),
      todayHighlight: true,
      dateFormat: "yy-mm-dd",
      autoclose: true,
      changeMonth: true,
      changeYear: true,
      yearRange: "1920:" + (new Date().getFullYear()),
      onSelect:  ( date) => {
        console.log("GOGOGO", date, this);
        this.fechaPax = date;
      }
    });
  }
}
