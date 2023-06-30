import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { roleGuard } from './role.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { HomeOneComponent } from './candeactivate/home-one/home-one.component';
import { FormComponent } from './candeactivate/form/form.component';
import { formDeatcivateGuard } from './candeactivate/form-deatcivate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signin',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        loadChildren: () =>
          import('./pages/auth/signin/signin.module').then(
            (m) => m.SigninModule
          ),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('./pages/auth/signup/signup.module').then(
            (m) => m.SignupModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/admin/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/admin/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'candeactivate',
    component: HomeOneComponent,
  },
  {
    path: 'form',
    component: FormComponent,
    canDeactivate: [formDeatcivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
