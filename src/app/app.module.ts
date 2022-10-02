import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Hys1Component } from './components/hys1/hys1.component';
import { Hys2Component } from './components/hys2/hys2.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewproyectoComponent } from './components/proyecto/newproyecto.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { EditSkillComponent } from './components/hys2/edit-skill.component';
import { NewSkillComponent } from './components/hys2/new-skill.component';
import { EditSkilliComponent } from './components/hys1/edit-skilli.component';
import { NewSkilliComponent } from './components/hys1/new-skilli.component';
import { EditAcercadmComponent } from './components/acerca-de/edit-acercadm.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditNombreComponent } from './components/acerca-de/edit-nombre.component';
import { EditImagenComponent } from './components/acerca-de/edit-imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    HomeComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    Hys1Component,
    Hys2Component,
    ProyectoComponent,
    FooterComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectoComponent,
    EditproyectoComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditSkilliComponent,
    NewSkilliComponent,
    EditAcercadmComponent,
    EditBannerComponent,
    EditNombreComponent,
    EditImagenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
