import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IngresosServices } from './ingreso/ingreso.service';
import { EgresosServices } from './egreso/egreso.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EgresoComponent,
    IngresoComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [IngresosServices, EgresosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
