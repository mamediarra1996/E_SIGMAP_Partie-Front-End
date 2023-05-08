import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActuConsulteComponent } from './actu-consulte/actu-consulte.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { ContactComponent } from './contact/contact.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterComponent } from './register/register.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';




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
      path:'actuConsulte',
      component: ActuConsulteComponent
    },
    {
      path:'contact',
      component: ContactComponent
    },
    {
      path:'login',
      component: LoginUserComponent
    },
    {
      path:'register',
      component: RegisterComponent
    },
    {
      path:'loginsuccess',
      component: LoginsuccessComponent 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
