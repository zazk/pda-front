import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser')) || {};
    console.log('Gogogo', this.user);

    this.service.consultaOperadorxemail(this.user.var_email).subscribe(r => {
      this.user.num_saldo = r.num_saldo;
      this.service.theUser = JSON.stringify(this.user);
    });
    console.log('JQUERY', $);
    $('.nav-menu').click(e => {
      e.preventDefault();
      $('.nav-menu')
        .parent()
        .toggleClass('open');
    });
  }

  onCerrarSession() {
    localStorage.clear();
    this.router.navigate(['home']);
  }
}
