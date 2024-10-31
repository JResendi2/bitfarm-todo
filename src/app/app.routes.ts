import { Routes } from '@angular/router';
import { ShowComponent } from './pages/ram/show/show.component';
import { IndexComponent } from './pages/ram/index/index.component';
import { FormComponent } from './pages/form/form.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  // {
  //   path: 'ram', component: IndexComponent, children: [
  //     {
  //       path: 'details/:id',
  //       component: ShowComponent,
  //     },
  //   ]
  // },

  {
    path: 'ram',
    component: IndexComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin']
    }
  },

  { path: 'ram/details/:id', component: ShowComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormComponent},
  { path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  // { path: '',   redirectTo: '/auth/login', pathMatch: 'full' },
];
