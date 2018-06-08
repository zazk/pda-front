import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "../shared/services/user/user.service";
import { Pax } from "../models/pax";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

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
  fecha: string;
  constructor( private router: Router, private service: UserService) {}

  ngOnInit() {
    this.loadScripts();
    this.service.listRutas().subscribe(data => {
      console.log("DATA :", data);
      this.routes = data;
    });
  }

  onSubmit(form: NgForm): void {
    if (this.fecha  && form.value.ruta) {
      localStorage.setItem("paxes", JSON.stringify(this.paxes) || "[]" );
      localStorage.setItem("fecha", this.fecha);
      localStorage.setItem("ruta", form.value.ruta);
      localStorage.setItem("rutas", JSON.stringify(this.routes) );
      this.router.navigate(["ingreso-visitantes"]);
    } else {
      console.log("Por favor seleccione fecha", this.fecha, form.value.ruta);
      alert("Ingresar Fecha y Ruta ");
    }
  }

  onUpdateDate($event) {
  }

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
