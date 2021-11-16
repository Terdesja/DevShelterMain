import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModalComponent } from './modal/modal.component';


const routes: Routes = [
  { path: 'contactos', component: ContactoComponent },
  { path: 'gallery', component: GaleriaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'modal', component: ModalComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
