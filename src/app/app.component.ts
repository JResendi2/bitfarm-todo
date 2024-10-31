import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { AuthService } from './services/auth/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api';

  constructor(private serviceAuth: AuthService, private router: Router){
  }

  logout() {
    this.serviceAuth.logout();
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(){
    return this.serviceAuth.isLoggedIn()
  }
}
