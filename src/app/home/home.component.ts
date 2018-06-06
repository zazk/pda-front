import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services/user/user.service";

declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  routes: any[];
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.listRutas().subscribe(data => {
      console.log("DATA :", data);
      this.routes = data;
    });
    console.log("Gogogogo");
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
