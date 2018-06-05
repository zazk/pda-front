import { Component, OnInit, Input } from "@angular/core";

declare var $: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent implements OnInit {
  @Input() user: string;
  @Input() password: string;
  constructor() {}

  ngOnInit() {}

  onSubmit(form: any): void {
    localStorage.setItem("currentUser", "true");
    window.location.href = "/home";
  }

  login() {}
}

$(document).ready(() => {
  $(document).on("click", ".toolbar a[data-target]", function(e) {
    e.preventDefault();
    const target = $(this).data("target");
    $(".widget-box.visible").removeClass("visible"); //hide others
    $(target).addClass("visible"); //show target
  });

  $("#btn-login-dark").on("click", function(e) {
    $("body").attr("class", "login-layout");
    $("#id-text2").attr("class", "white");
    $("#id-company-text").attr("class", "blue");

    e.preventDefault();
  });
  $("#btn-login-light").on("click", function(e) {
    $("body").attr("class", "login-layout light-login");
    $("#id-text2").attr("class", "grey");
    $("#id-company-text").attr("class", "blue");

    e.preventDefault();
  });
  $("#btn-login-blur").on("click", function(e) {
    $("body").attr("class", "login-layout blur-login");
    $("#id-text2").attr("class", "white");
    $("#id-company-text").attr("class", "light-blue");

    e.preventDefault();
  });
});