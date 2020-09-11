import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';
import { BandejaSalidaComponent } from './bandeja-salida/bandeja-salida.component';
import { RegistroExternoComponent } from './registro-externo/registro-externo.component';
import { RegistroInternoComponent } from './registro-interno/registro-interno.component';

const pagesRoutes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'index', component: DashboardComponent },
    { path: 'funcionalidad1', component: BandejaEntradaComponent },
    { path: 'funcionalidad2', component: BandejaSalidaComponent },
    { path: 'funcionalidad3', component: RegistroExternoComponent },
    { path: 'funcionalidad4', component: RegistroInternoComponent },
    // {
    //     path: 'index',
    //     component: PagesComponent,
    //     children: [
    //     ]
    // }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);