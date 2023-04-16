import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;
  login(userName?: string, password?: string): Observable<boolean> {
    const isAuthenticated = userName === 'Guelate' && password === 'admin';
    console.log(`Authentication success: ${isAuthenticated}`);

    localStorage.setItem('isLogged', isAuthenticated ? 'true' : 'false');

    return of(isAuthenticated).pipe(
      delay(100),
      tap((val) => console.log(`Authentication success: ${val}`))
    );
  }
}
