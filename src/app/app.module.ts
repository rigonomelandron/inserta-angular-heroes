import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstructuraModule } from './estructura/estructura.module';
import { SharedModule } from './shared/shared.module';
//Cambiar el local a es-ES (O es-AR si queremos español de Argentina, p. ej.)
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { EsPeligrosoPipe } from './shared/pipes/es-peligroso.pipe';
registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstructuraModule,
    SharedModule

  ],
  exports:[

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
