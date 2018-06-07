import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services/user/user.service";
import { Pax } from "../models/pax";

declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  routes: any[];
  csvContent: any[];
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.listRutas().subscribe(data => {
      console.log("DATA :", data);
      this.routes = data;
    });
    console.log("Gogogogo");
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
        this.csvContent = textFromFileLoaded
          .split("\n")
          .slice(1)
          .map(o => new Pax( o.split(",") ) );
        console.log("CONTENT FILE", this.csvContent);
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
    todayHighlight: true
  });

  $("#datepicker").on("changeDate", function() {
    $("#my_hidden_input").val($("#datepicker").datepicker("getFormattedDate"));
  });
});
