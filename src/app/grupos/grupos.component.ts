import { Component, OnInit } from "@angular/core";
import { Grupo } from "../models/grupo";

declare var $: any;
@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styles: []
})
export class GruposComponent implements OnInit {
  grupos: Grupo[];
  constructor() {}

  ngOnInit() {
    this.grupos = JSON.parse( localStorage.getItem("grupos") ) || [];
  }
}

$(document).ready(() => {});
