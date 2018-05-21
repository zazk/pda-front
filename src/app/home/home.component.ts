import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';

declare var $: any;
@Component({
  selector: 'app-home',
  template: `
    <div>
      <div *ngFor="let item of routes">
        {{item.var_nombre}}
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  routes: any[];
  constructor( private service: UserService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('DATA CTM:', data);
      this.routes = data;
    });
    console.log('Gogogogo');
  }

}

$(document).ready( () => {

  $(document).on('click', '.toolbar a[data-target]', function(e) {
  e.preventDefault();
  const target = $(this).data('target');
  $('.widget-box.visible').removeClass('visible');//hide others
  $(target).addClass('visible');//show target
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
