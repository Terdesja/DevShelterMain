import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormComponent } from './form/form.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DesarrolloComponent } from './componentes/desarrollo/desarrollo.component';
import { DesignComponent } from './componentes/design/design.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    GaleriaComponent,
    ContactoComponent,
    DesarrolloComponent,
    DesignComponent,
    InicioComponent,
    ModalComponent,
 
    
    

    
    

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    NgbModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }