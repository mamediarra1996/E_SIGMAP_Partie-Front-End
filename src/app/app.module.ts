import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { OutilGestionComponent } from './outil-gestion/outil-gestion.component';
import { OrganeComponent } from './organe/organe.component';
import { RapportComponent } from './rapport/rapport.component';
import { FooterComponent } from './footer/footer.component';
import { ActuConsulteComponent } from './actu-consulte/actu-consulte.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewslettersuccessComponent } from './newslettersuccess/newslettersuccess.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    AcceuilComponent,
    ActualiteComponent,
    ConsultationComponent,
    OutilGestionComponent,
    OrganeComponent,
    RapportComponent,
    FooterComponent,
    ActuConsulteComponent,
    ContactComponent,
    LoginUserComponent,
    RegisterComponent,
    LoginsuccessComponent,
    NewsletterComponent,
    NewslettersuccessComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
