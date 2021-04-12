import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroUserComponent } from './registro-user/registro-user.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaAddComponent } from './persona/persona-add/persona-add.component';
import { EditPersonaComponent } from './persona/edit-persona/edit-persona.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroUserComponent},
  {path: 'login/registro', component: RegistroUserComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'persona/formulario', component: PersonaAddComponent},
  {path: 'persona/edit/:id/:nombre/:correo', component: EditPersonaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
