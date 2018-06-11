import { Component, OnInit } from "@angular/core";
import { Pago } from "../models/pago";
import { UserService } from "../shared/services/user/user.service";

@Component({
  selector: "app-pagos",
  templateUrl: "./pagos.component.html",
  styles: []
})
export class PagosComponent implements OnInit {
  pagos: Pago[];
  url: string;
  constructor( private service: UserService) {}

  ngOnInit() {
    this.url = this.service.url;
    this.pagos = JSON.parse(localStorage.getItem("pagos")) || [];
  }
}
