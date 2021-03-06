import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  @Input() user: string;
  @Input() password: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: any): void {
    this.userService.loginUser(form.user, form.password).subscribe(response => {
      if (response.user) {
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        localStorage.setItem('rutas', JSON.stringify(response.rutas));
        localStorage.setItem(
          'tipoDocumento',
          JSON.stringify(response.tipoDocumento)
        );

        this.router.navigate(['home']);
      } else {
        alert(response.error);
      }
    });
  }

  login() {}
}

$(document).ready(() => {
  $(document).on('click', '.toolbar a[data-target]', function(e) {
    e.preventDefault();
    const target = $(this).data('target');
    $('.widget-box.visible').removeClass('visible'); //hide others
    $(target).addClass('visible'); //show target
  });

  $('#btn-login-dark').on('click', function(e) {
    $('body').attr('class', 'login-layout');
    $('#id-text2').attr('class', 'white');
    $('#id-company-text').attr('class', 'blue');

    e.preventDefault();
  });
  $('#btn-login-light').on('click', function(e) {
    $('body').attr('class', 'login-layout light-login');
    $('#id-text2').attr('class', 'grey');
    $('#id-company-text').attr('class', 'blue');

    e.preventDefault();
  });
  $('#btn-login-blur').on('click', function(e) {
    $('body').attr('class', 'login-layout blur-login');
    $('#id-text2').attr('class', 'white');
    $('#id-company-text').attr('class', 'light-blue');

    e.preventDefault();
  });
});
