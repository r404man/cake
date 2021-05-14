import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  auth(form: NgForm) {
    let isAuth = this.authService.auth(form.value);
    if(isAuth) {
      this.router.navigateByUrl('/admin/cake-category-create');
    }
  }

  ngOnInit(): void {
  }

}
