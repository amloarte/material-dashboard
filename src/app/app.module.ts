import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//PAGES
import { PagesModule } from './pages/pages.module';

//LOGIN
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './login/recuperar-password.component';

//RUTAS PRINCIPAL
//import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './app.routes';

//Servicios Modulo
import { ServiceModule } from './services/service.module';

//TEMPORAL
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    LoginComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    PagesModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }