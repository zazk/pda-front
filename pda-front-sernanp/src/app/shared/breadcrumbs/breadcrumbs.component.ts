import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  user: any;
  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser")) || {};
    this.service.user.subscribe(user => {
      this.user = user;
      console.log("USER IN NAVBAR", this.user);
    });
  }
}
