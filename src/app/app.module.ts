import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './components/screen/screen.component';
import { CuerpoCalcComponent } from './components/cuerpo-calc/cuerpo-calc.component';
import { ButtonComponent } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ //Aqui van los componentes
    AppComponent,
    ScreenComponent,
    CuerpoCalcComponent,
    ButtonComponent
  ],
  imports: [ //Aqui van los modulos
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [], //Aqui van los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
