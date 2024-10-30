import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';

interface UserAuth {
  gmail: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent implements OnInit {
  myFormControl: any;

  constructor(private serviceUser: UserService, private router: Router) { }

  ngOnInit(): void {
    this.myFormControl = new FormGroup({
      gmail: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit() {

    if (this.myFormControl.invalid) {
      if(this.myFormControl.get('gmail').invalid){
        this.myFormControl.get('gmail').touched = true;
      }
      if(this.myFormControl.get('password').invalid){
        this.myFormControl.get('password').touched = true;
      }
      return;
    }

    const user: UserAuth = this.myFormControl.value;
    if (this.serviceUser.existsUser(user)) {

      this.router.navigate(['/ram']);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
}
