import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: any;
  password: any;
  message?: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe((data) => {
      if (!data) {
        this.message = 'données invalide';
        return;
      }
      this.message = 'Vous êtes connectés !';
      this.router.navigate(['/pokemon/all']);
    });
  }
}
