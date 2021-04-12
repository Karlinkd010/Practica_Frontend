import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegistroUserComponent } from './registro-user/registro-user.component';

import {MaterialModule} from './material/material.module';
import { PersonaComponent } from './persona/persona.component';
import { PersonaAddComponent } from './persona/persona-add/persona-add.component'
import { ToastrModule } from 'ngx-toastr';
import { EditPersonaComponent } from './persona/edit-persona/edit-persona.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistroUserComponent,
    PersonaComponent,
    PersonaAddComponent,
    EditPersonaComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
