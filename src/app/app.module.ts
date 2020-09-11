import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//LOGIN
import { LoginComponent } from './IngresoSistema/Login/login.component';
import { RecuperarPasswordComponent } from './IngresoSistema/RecuperarPassword/recuperar-password.component';

//RUTAS PRINCIPAL
import { APP_ROUTES } from './app.routes';

//Servicios Modulo
import { ServiceModule } from './services/service.module';

//Servicios Personalizados
import { SharedModule } from './shared/shared.module';

//TEMPORAL
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Componentes
import { PagesComponent } from './pages/pages.component';
import { PerfilesComponent } from './IngresoSistema/Perfiles/perfiles.component';

//Interceptores
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarPasswordComponent,
    PagesComponent,
    PerfilesComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }