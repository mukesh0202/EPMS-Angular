import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from '../nav/navbar/navbar';
import {  Observable } from 'rxjs';
import { LoginService } from './auth/loginservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet,CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected title = 'EPMS';

 isLoggedIn$: Observable<boolean>;
  router = inject(Router);

  constructor(private loginService: LoginService) {
    this.isLoggedIn$ = this.loginService.isLoggedIn$;
  }

  showNavbar(): boolean {
    return (
      this.router.url !== '/login' &&
      localStorage.getItem('isLoggedIn') === 'true'
    );
  }
}
