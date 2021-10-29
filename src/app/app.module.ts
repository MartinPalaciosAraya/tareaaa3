import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServicioalclienteComponent } from './servicioalcliente/servicioalcliente.component';

import {ReactiveFormsModule} from '@angular/forms';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DetalleNoticiaComponent,
    FooterComponent,
    HeaderComponent,
    ServicioalclienteComponent,
    NoticiasComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
