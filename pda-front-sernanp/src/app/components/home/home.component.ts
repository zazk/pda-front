import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "../../shared/services/user/user.service";
import { Pax } from "../../models/pax";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Pago } from "../../models/pago";
import { Grupo } from "../../models/grupo";

declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  routes: any[] = [
    { srl_cod_ruta: 1, var_nombre: "Camino Inca 2D/1N" },
    { srl_cod_ruta: 1, var_nombre: "Camino Inca 4D/3N" },
    { srl_cod_ruta: 1, var_nombre: "Salkantay 3D/2N" },
    { srl_cod_ruta: 1, var_nombre: "Choquequirao 3D/2N" }
  ];
  paxes: Pax[];
  paxesTmp: Pax[];
  fecha: string;
  user: any;
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.loadScripts();
    this.user = JSON.parse(localStorage.getItem("currentUser")) || {};
    this.paxesTmp = JSON.parse(localStorage.getItem("paxes")) || [];
    console.log("USER", this.user);
    this.service.listRutas().subscribe(data => {
      console.log("DATA :", data);
      this.routes = data;
    });
    this.service
      .consultaPagooperador(this.user.var_cod_operador)
      .subscribe(response => {
        console.log("PAGOS", response);
        if (response.length) {
          const pagos = response.map(r =>
            new Pago(
              r.var_operacion,
              r.num_monto,
              r.dte_fec_abono,
              r.var_comprobante,
              r.int_estado,
              r.var_cod_operador
            ));
          localStorage.setItem("pagos", JSON.stringify(pagos));
        }
      });
    this.service
      .consultaGrupooperador(this.user.var_cod_operador)
      .subscribe(response => {
        console.log("GRUPOS", response);
        if (response.length) {
          //const grupo = response.map( r = new Grupo([],))
        }
      });
/*     this.service
      .insertVisitantes(this.paxesTmp)
      .subscribe(response => {
        console.log("VISITANTES", response);
        if (response.length) {
        }
      }); */
  }

  onSubmit(form: NgForm): void {
    if (this.fecha && form.value.ruta) {
      localStorage.setItem("paxes", JSON.stringify(this.paxes) || "[]");
      localStorage.setItem("fecha", this.fecha);
      localStorage.setItem("ruta", form.value.ruta);
      localStorage.setItem("rutas", JSON.stringify(this.routes));
      this.router.navigate(["ingreso-visitantes"]);
    } else {
      console.log("Por favor seleccione fecha", this.fecha, form.value.ruta);
      alert("Ingresar Fecha y Ruta ");
    }
  }

  onUpdateDate($event) {}

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;

    if (files && files.length) {
      console.log("Filename: " + files[0].name);
      console.log("Type: " + files[0].type);
      console.log("Size: " + files[0].size + " bytes");

      const fileToRead = files[0];

      const fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent: any) => {
        const textFromFileLoaded = fileLoadedEvent.target.result;
        this.paxes = textFromFileLoaded
          .split("\n")
          .slice(1)
          .map(o => new Pax(o.split(",")));
        console.log("CONTENT FILE", this.paxes);
      };

      fileReader.readAsText(fileToRead, "UTF-8");
    }
  }
  // JQuery Functions
  loadScripts() {
    $(".chosen-select").chosen();
    $("#id-input-file-2").ace_file_input({
      no_file: "Importar Visitantes",
      btn_choose: "Importar",
      btn_change: "Cambiar",
      droppable: false,
      onchange: null,
      thumbnail: false
    });
    $("#datepicker").datepicker({
      minDate: 0,
      startDate: new Date(),
      todayHighlight: true,
      format: "dd-mm-yyyy"
    });

    $("#datepicker").on("changeDate", () => {
      this.fecha = $("#datepicker").datepicker("getFormattedDate");
    });
  }
}
