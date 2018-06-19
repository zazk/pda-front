import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services/user/user.service";
import { NgForm } from "@angular/forms";
import { Pago } from "../models/pago";
import { Router } from "@angular/router";
import { User } from "../models/user";

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
  usuario: User;
  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("currentUser")) || {};
    this.pagos = JSON.parse(localStorage.getItem("pagos")) || [];
    console.log("USUARIO", this.usuario);
    this.loadScript();
  }

  onSubmit(form: NgForm): void {
    console.log("FORM", form, "FECHA", this.fecha, "USUARIO", this.usuario);
    const obj: any = form.value;
    if (this.filename && obj.monto && obj.operacion) {
      const pago: Pago = new Pago(
        obj.operacion,
        obj.monto,
        this.fecha,
        this.filename,
        "true",
        this.usuario.var_cod_operador
      );
      console.log("PAGO", pago);

      this.service.insertPago(pago).subscribe(( response) => {
        this.pagos.push(pago);
        localStorage.setItem("pagos", JSON.stringify(this.pagos));
        this.service.theUser = JSON.stringify(response.operador);
        this.router.navigate(["pagos"]);
      });
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
    $(".date-picker").datepicker({
      autoclose: true,
      endDate: new Date(),
      todayHighlight: true
    });

    $(".date-picker").on("changeDate", () => {
      this.fecha = $(".date-picker")
        .data("datepicker")
        .getFormattedDate("yyyy-mm-dd");
        console.log("This Fecha", this.fecha);
    });
  }
}
