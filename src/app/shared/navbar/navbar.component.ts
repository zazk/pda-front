import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: []
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor() {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser") ) || {};
    console.log("USER", this.user);
  }
}
