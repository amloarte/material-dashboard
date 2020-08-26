import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';
import { BandejaSalidaComponent } from './bandeja-salida/bandeja-salida.component';
import { RegistroExternoComponent } from './registro-externo/registro-externo.component';
import { RegistroInternoComponent } from './registro-interno/registro-interno.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    BandejaEntradaComponent,
    BandejaSalidaComponent,
    RegistroExternoComponent,
    RegistroInternoComponent,
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
  ]
})
export class PagesModule { }
