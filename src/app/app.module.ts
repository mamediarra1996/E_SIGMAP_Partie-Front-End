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
import { RestapiService } from './restapi.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';



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
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
