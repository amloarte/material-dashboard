import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './login/recuperar-password.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: 'recuperarpassword', component: RecuperarPasswordComponent },
    { path: '**', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });