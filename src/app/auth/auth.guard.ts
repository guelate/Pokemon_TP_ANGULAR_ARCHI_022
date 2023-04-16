import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean | UrlTree {
    const isLoggedIn = localStorage.getItem('isLogged') === 'true';

    if (isLoggedIn) {
      if (url === '/login') {
        return this.router.parseUrl('/pokemon/all');
      } else {
        return true;
      }
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
