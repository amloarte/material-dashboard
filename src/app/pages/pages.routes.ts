import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';
import { BandejaSalidaComponent } from './bandeja-salida/bandeja-salida.component';
import { RegistroExternoComponent } from './registro-externo/registro-externo.component';
import { RegistroInternoComponent } from './registro-interno/registro-interno.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'index', component: DashboardComponent  },
            { path: 'bandejaEntrada', component: BandejaEntradaComponent },
            { path: 'bandejaSalida', component: BandejaSalidaComponent },
            { path: 'externo', component: RegistroExternoComponent },
            { path: 'interno', component: RegistroInternoComponent },
            { path: '', redirectTo: '/index', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);