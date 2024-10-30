import { Routes } from '@angular/router';
import { ShowComponent } from './pages/ram/show/show.component';
import { IndexComponent } from './pages/ram/index/index.component';
import { FormComponent } from './pages/form/form.component';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  // {
  //   path: 'ram', component: IndexComponent, children: [
  //     {
  //       path: 'details/:id',
  //       component: ShowComponent,
  //     },
  //   ]
  // },

  { path: 'ram', component: IndexComponent},
  { path: 'ram/details/:id', component: ShowComponent},
  { path: 'form', component: FormComponent},
  { path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  { path: '',   redirectTo: '/auth/login', pathMatch: 'full' },

];
