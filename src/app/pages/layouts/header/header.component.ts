import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/Auth.service';
import { Router } from '@angular/router';
import { PagesService } from '../../../services/pages/pages.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit{

  switchColor = true;

  constructor(private serviceAuth: AuthService, private router: Router, private eventService: PagesService, private cdr: ChangeDetectorRef){
  }

  ngOnInit(){
    this.eventService.getEvent().subscribe(event => {
      if(event === 'footer'){
        this.switchColor = !this.switchColor;
        this.cdr.detectChanges(); // forza la actualizacion del html
        console.log(this.switchColor);
      }
    });
  }

  logout() {
    this.serviceAuth.logout();
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(){
    return this.serviceAuth.isLoggedIn()
  }


}
