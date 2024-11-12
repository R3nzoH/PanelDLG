import { Routes } from '@angular/router';
import { LoginComponent } from './components/page/login/login.component';
import { RegisterComponent } from './components/page/register/register.component';
import { ContainerLoginComponent } from './components/page/container-login/container-login.component';
import { HomeComponent } from './components/page/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'containerlogin', pathMatch: 'full' }, // Redirección a containerlogin por defecto
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'containerlogin', component: ContainerLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'containerlogin' } // Redirección para rutas no encontradas
];
