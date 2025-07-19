import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private router: Router)
  {

  }
  private _loggedIn = new BehaviorSubject<boolean>(localStorage.getItem('isLoggedIn') === 'true');
  readonly isLoggedIn$ = this._loggedIn.asObservable();

  loginSuccess() {
    localStorage.setItem('isLoggedIn', 'true');
    this._loggedIn.next(true);
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this._loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
