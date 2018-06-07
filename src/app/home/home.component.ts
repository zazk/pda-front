import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "../shared/services/user/user.service";
import { Pax } from "../models/pax";
import { NgForm } from "@angular/forms";

declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  routes: any[];
  paxes: Pax[];
  @ViewChild("fecha") fecha: ElementRef;
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.listRutas().subscribe(data => {
      console.log("DATA :", data);
      this.routes = data;
    });
  }

  onSubmit(form: NgForm): void {
    const fecha: string = this.fecha.nativeElement.value;
    console.log(
      "FORM",
      form.value,
      "Date Route",
      fecha,
      "Paxes:",
      this.paxes
    );
    if (fecha !== "" && form.value.ruta) {
      localStorage.setItem("paxes", JSON.stringify( this.paxes ) );
      localStorage.setItem("fecha", fecha );
      localStorage.setItem("ruta", form.value.ruta );
      window.location.href = "ingreso-visitantes";
    } else {
      console.log("Por favor seleccione fecha");
    }
  }

  onUpdateDate($event) {
    console.log("event", $event);
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
}

$(document).ready(() => {
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

  $("#datepicker").on("changeDate", function() {
    $("#my_hidden_input").val($("#datepicker").datepicker("getFormattedDate"));
  });
});
