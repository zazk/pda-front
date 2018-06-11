import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../services/user/user.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: []
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor(private service: UserService) {
  }

  ngOnInit( ) {

    this.user = JSON.parse(localStorage.getItem("currentUser") ) || {};
    this.service.user.subscribe( (user) => {
      this.user = user;
      console.log("USER IN NAVBAR", this.user);
    });
  }
}
