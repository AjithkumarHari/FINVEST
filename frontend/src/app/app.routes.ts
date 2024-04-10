import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { userAuthGuard } from './user-auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate:[ userAuthGuard ]},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
