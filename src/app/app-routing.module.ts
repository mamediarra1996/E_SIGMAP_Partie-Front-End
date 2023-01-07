import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActuConsulteComponent } from './actu-consulte/actu-consulte.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component: AcceuilComponent
  },
  {
    path:'actualite',
    component: ActualiteComponent
    },
    {
      path:'contact',
      component: ContactComponent
    },
    {
      path:'actuConsulte',
      component: ActuConsulteComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
