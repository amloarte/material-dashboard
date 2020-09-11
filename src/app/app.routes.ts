import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './IngresoSistema/Login/login.component';
import { RecuperarPasswordComponent } from './IngresoSistema/RecuperarPassword/recuperar-password.component';
import { PerfilesComponent } from './IngresoSistema/Perfiles/perfiles.component';
import { LoginGuard } from './services/guards/login-guard.guard';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'index',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'recuperar-password', component: RecuperarPasswordComponent },
    { path: 'perfiles', component: PerfilesComponent },
    { path: 'index', component: PagesComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });