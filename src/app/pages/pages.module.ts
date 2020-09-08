import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modulos personalizados
import { SharedModule } from '../shared/shared.module';

//Rutas de los componentes
import { PAGES_ROUTES } from './pages.routes';

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';
import { BandejaSalidaComponent } from './bandeja-salida/bandeja-salida.component';
import { RegistroExternoComponent } from './registro-externo/registro-externo.component';
import { RegistroInternoComponent } from './registro-interno/registro-interno.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BandejaEntradaComponent,
    BandejaSalidaComponent,
    RegistroExternoComponent,
    RegistroInternoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
  ],
})
export class PagesModule { }
