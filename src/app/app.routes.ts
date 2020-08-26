import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './login/recuperar-password.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recuperarpassword', component: RecuperarPasswordComponent },
    { path: '**', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });