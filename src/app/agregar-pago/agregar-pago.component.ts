import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services/user/user.service";
import { NgForm } from "@angular/forms";
import { Pago } from "../models/pago";
import { Router } from "@angular/router";

declare var $: any;

@Component({
  selector: "app-agregar-pago",
  templateUrl: "./agregar-pago.component.html",
  styles: []
})
export class AgregarPagoComponent implements OnInit {
  filename: string;
  pagos: Pago[];
  fecha: string;
  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {

    this.pagos = JSON.parse( localStorage.getItem("pagos") ) || [];
    this.loadScript();
  }

  onSubmit(form: NgForm): void {
    console.log("FORM", form, "FECHA", this.fecha);
    const obj: any = form.value;
    if (this.filename  && obj.monto && obj.operacion ) {
        const pago: Pago = new Pago(obj.operacion, obj.monto, this.fecha, this.filename);
        this.pagos.push(pago);
        localStorage.setItem("pagos", JSON.stringify( this.pagos ) );
        this.router.navigate(["pagos"]);
    } else {
      console.log("Por favor suba su pago", this.filename, form.value.monto);
      alert("Ingresar todos los campos");
    }
  }

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;

    if (files && files.length) {
      console.log("Filename: " + files[0].name);
      console.log("Type: " + files[0].type);
      console.log("Size: " + files[0].size + " bytes");

      const fileToRead = files[0];
      this.service.uploadFile(fileToRead).subscribe(
        data => {
          console.log("DATA:", data);
          if (data.message) {
            this.filename = data.message;
          } else {
            console.log(data.error);
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  loadScript() {
    $(".chosen-select").chosen();
    $("#id-input-file-2").ace_file_input({
      no_file: "Ingresar voucher",
      btn_choose: "Choose",
      btn_change: "Cargar",
      droppable: false,
      onchange: null,
      thumbnail: false,
      // | true | large
      whitelist: "gif|png|jpg|jpeg"
      // blacklist:'exe|php'
      // onchange:''
      //
    });

    // datepicker plugin
    // link
    $(".date-picker")
      .datepicker({
        autoclose: true,
        todayHighlight: true
      });

      $(".date-picker").on("changeDate", () => {
        this.fecha = $(".date-picker").datepicker("getFormattedDate");
      });
  }
}
