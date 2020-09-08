import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//LOGIN
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './login/recuperar-password.component';

//RUTAS PRINCIPAL
import { APP_ROUTES } from './app.routes';

//Servicios Modulo
import { ServiceModule } from './services/service.module';

//TEMPORAL
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Componentes
import { PerfilComponent } from './components/perfil/perfil.component';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    LoginComponent,
    RecuperarPasswordComponent,
    PagesComponent,
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