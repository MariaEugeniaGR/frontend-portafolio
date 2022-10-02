import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadmComponent } from './components/acerca-de/edit-acercadm.component';
import { EditImagenComponent } from './components/acerca-de/edit-imagen.component';
import { EditNombreComponent } from './components/acerca-de/edit-nombre.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkilliComponent } from './components/hys1/edit-skilli.component';
import { NewSkilliComponent } from './components/hys1/new-skilli.component';
import { EditSkillComponent } from './components/hys2/edit-skill.component';
import { NewSkillComponent } from './components/hys2/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyecto/newproyecto.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'nuevaexp', component: NewExperienciaComponent},
    {path: 'editexp/:id', component: EditExperienciaComponent},
    {path: 'nuevaedu', component: NeweducacionComponent},
    {path: 'editedu/:id', component: EditeducacionComponent},
    {path: 'nuevoproy', component: NewproyectoComponent},
    {path: 'editproyecto/:id', component: EditproyectoComponent},
    {path: 'newskill', component: NewSkillComponent},
    {path: 'editskill/:id', component: EditSkillComponent},
    {path: 'newskilli', component: NewSkilliComponent},
    {path: 'editskilli/:id', component: EditSkilliComponent},
    {path: 'editacercadm/:id', component: EditAcercadmComponent},
    {path: 'editbanner/:id', component: EditBannerComponent},
    {path: 'editnombre/:id', component: EditNombreComponent},
    {path: 'editimagen/:id', component: EditImagenComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
